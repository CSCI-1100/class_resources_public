let currentPage = 1;
const totalPages = 8;
let labStartTime = null;
let timerInterval = null;
let saveInterval = null;
let shownNotifications = new Set();

// Silly team name generators
const adjectives = ['Sentient', 'Flummoxed', 'Caffeinated', 'Bewildered', 'Ambitious', 'Chaotic', 'Sleepy', 'Energetic', 'Confused', 'Brilliant', 'Quirky', 'Mysterious'];
const nouns = ['Toasters', 'Capybaras', 'Penguins', 'Dragons', 'Llamas', 'Robots', 'Ninjas', 'Wizards', 'Pirates', 'Developers', 'Algorithms', 'Variables'];

// Timer and notification system
const phaseTimings = {
    10: { phase: 1, message: "You've reached 10 minutes! Try to wrap up Phase 1 in the next 10 minutes!" },
    20: { phase: 2, message: "You've reached 20 minutes! Let's move to Phase 2 if you haven't already." },
    40: { phase: 3, message: "You've reached 40 minutes! Time to start Phase 3 - Frontend Design & Layout." },
    60: { phase: 4, message: "You've reached 60 minutes! Move to Phase 4 - Integration & Documentation." },
    70: { phase: 4, message: "You've reached 70 minutes! Almost done - gather your documentation and code files and prepare for reflection." }
};

function startLabTimer() {
    labStartTime = Date.now();
    saveToStorage('labStartTime', labStartTime.toString());
    
    // Check for notifications every minute
    timerInterval = setInterval(checkTimerNotifications, 60000);
    
    // Save elapsed time every minute in case of refresh
    saveInterval = setInterval(saveElapsedTime, 60000);
    
    // Update display every 30 seconds
    setInterval(updateTimerDisplay, 30000);
    
    // Initial display update
    updateTimerDisplay();
}

function checkTimerNotifications() {
    if (!labStartTime) return;
    
    const elapsed = Math.floor((Date.now() - labStartTime) / (1000 * 60)); // minutes
    
    if (phaseTimings[elapsed] && !shownNotifications.has(elapsed)) {
        showNotification(phaseTimings[elapsed].message);
        shownNotifications.add(elapsed);
        saveToStorage('shownNotifications', JSON.stringify(Array.from(shownNotifications)));
    }
}

function showNotification(message) {
    const notification = document.getElementById('timerNotification');
    const messageElement = document.getElementById('notificationMessage');
    
    messageElement.textContent = message;
    notification.classList.add('show');
    
    // Auto-hide after 8 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 8000);
}

function closeNotification() {
    const notification = document.getElementById('timerNotification');
    notification.classList.remove('show');
}

function updateTimerDisplay() {
    if (!labStartTime) return;
    
    const elapsed = Math.floor((Date.now() - labStartTime) / (1000 * 60)); // minutes
    const hours = Math.floor(elapsed / 60);
    const minutes = elapsed % 60;
    
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    document.getElementById('elapsedTime').textContent = timeString;
}

function saveElapsedTime() {
    if (labStartTime) {
        const elapsed = Math.floor((Date.now() - labStartTime) / (1000 * 60));
        saveToStorage('elapsedMinutes', elapsed.toString());
    }
}

function loadTimerState() {
    const savedStartTime = loadFromStorage('labStartTime');
    const savedNotifications = loadFromStorage('shownNotifications');
    
    if (savedStartTime) {
        labStartTime = parseInt(savedStartTime);
        
        if (savedNotifications) {
            shownNotifications = new Set(JSON.parse(savedNotifications));
        }
        
        // Restart intervals
        timerInterval = setInterval(checkTimerNotifications, 60000);
        saveInterval = setInterval(saveElapsedTime, 60000);
        setInterval(updateTimerDisplay, 30000);
        
        updateTimerDisplay();
        
        // Check if we missed any notifications while away
        const elapsed = Math.floor((Date.now() - labStartTime) / (1000 * 60));
        Object.keys(phaseTimings).forEach(time => {
            const timeNum = parseInt(time);
            if (elapsed >= timeNum && !shownNotifications.has(timeNum)) {
                shownNotifications.add(timeNum);
                saveToStorage('shownNotifications', JSON.stringify(Array.from(shownNotifications)));
            }
        });
    }
}

function generateTeamName() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const teamName = `${randomAdjective} ${randomNoun}`;
    document.getElementById('teamName').value = teamName;
    saveToStorage('teamName', teamName);
}

function saveToStorage(key, value) {
    localStorage.setItem(`kioskLab_${key}`, value);
}

function loadFromStorage(key) {
    return localStorage.getItem(`kioskLab_${key}`) || '';
}

function initializeForm() {
    // Load saved data
    document.getElementById('teamName').value = loadFromStorage('teamName');
    document.getElementById('teamMembers').value = loadFromStorage('teamMembers');
    document.getElementById('aiPlatform').value = loadFromStorage('aiPlatform');
    document.getElementById('phase1Insight').value = loadFromStorage('phase1Insight');
    document.getElementById('phase2Insight').value = loadFromStorage('phase2Insight');
    document.getElementById('phase3Insight').value = loadFromStorage('phase3Insight');
    document.getElementById('phase4Insight').value = loadFromStorage('phase4Insight');
    document.getElementById('reflection1').value = loadFromStorage('reflection1');
    document.getElementById('reflection2').value = loadFromStorage('reflection2');
    document.getElementById('reflection3').value = loadFromStorage('reflection3');

    // Generate initial team name if none exists
    if (!document.getElementById('teamName').value) {
        generateTeamName();
    }

    // Add event listeners for auto-saving
    const fields = ['teamName', 'teamMembers', 'aiPlatform', 'phase1Insight', 'phase2Insight', 'phase3Insight', 'phase4Insight', 'reflection1', 'reflection2', 'reflection3'];
    fields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        element.addEventListener('input', () => saveToStorage(fieldId, element.value));
        element.addEventListener('change', () => saveToStorage(fieldId, element.value));
    });

    // Load timer state or start new timer
    loadTimerState();
    
    // If no timer is running, start one when they first interact
    if (!labStartTime) {
        document.addEventListener('click', function startTimerOnFirstClick() {
            if (!labStartTime) {
                startLabTimer();
                document.removeEventListener('click', startTimerOnFirstClick);
            }
        }, { once: true });
    }
}

function updateProgress() {
    const progress = (currentPage / totalPages) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function changePage(direction) {
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        // Hide current page
        document.getElementById(`page${currentPage}`).classList.remove('active');
        
        // Show new page
        currentPage = newPage;
        document.getElementById(`page${currentPage}`).classList.add('active');
        
        // Update navigation
        document.getElementById('currentPage').textContent = currentPage;
        document.getElementById('prevBtn').disabled = currentPage === 1;
        document.getElementById('nextBtn').disabled = currentPage === totalPages;
        
        // Update progress bar
        updateProgress();
    }
}

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Get form data
    const teamData = {
        teamName: document.getElementById('teamName').value,
        teamMembers: document.getElementById('teamMembers').value,
        aiPlatform: document.getElementById('aiPlatform').value,
        phase1Insight: document.getElementById('phase1Insight').value,
        phase2Insight: document.getElementById('phase2Insight').value,
        phase3Insight: document.getElementById('phase3Insight').value,
        phase4Insight: document.getElementById('phase4Insight').value,
        reflection1: document.getElementById('reflection1').value,
        reflection2: document.getElementById('reflection2').value,
        reflection3: document.getElementById('reflection3').value
    };

    // Add elapsed time to report
    const elapsedTimeText = document.getElementById('elapsedTime').textContent;

    // Create PDF content
    let yPosition = 20;
    const lineHeight = 7;
    const maxWidth = 180;

    // Title
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('AI Kiosk Development Lab Report', 20, yPosition);
    yPosition += 15;

    // Team Information
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Team Information', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text(`Team Name: ${teamData.teamName}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`AI Platform: ${teamData.aiPlatform}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Total Lab Time: ${elapsedTimeText}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text('Team Members:', 20, yPosition);
    yPosition += lineHeight;
    const members = teamData.teamMembers.split('\n').filter(m => m.trim());
    members.forEach(member => {
        doc.text(`• ${member.trim()}`, 25, yPosition);
        yPosition += lineHeight;
    });

    yPosition += 5;

    // Phase Insights
    const phases = [
        { title: 'Phase 1: Architecture & Data Foundation (Clarity & Logistics)', data: teamData.phase1Insight },
        { title: 'Phase 2: Calendar Logic & Time Management (Examples & Refinement)', data: teamData.phase2Insight },
        { title: 'Phase 3: Frontend Design & Layout (Audience & Examples)', data: teamData.phase3Insight },
        { title: 'Phase 4: Integration & Documentation (Examples & Refinement)', data: teamData.phase4Insight }
    ];

    phases.forEach(phase => {
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }

        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text(phase.title, 20, yPosition);
        yPosition += 8;

        doc.setFont(undefined, 'normal');
        if (phase.data.trim()) {
            const lines = doc.splitTextToSize(phase.data, maxWidth);
            lines.forEach(line => {
                if (yPosition > 280) {
                    doc.addPage();
                    yPosition = 20;
                }
                doc.text(line, 20, yPosition);
                yPosition += lineHeight;
            });
        } else {
            doc.text('(No response provided)', 20, yPosition);
            yPosition += lineHeight;
        }
        yPosition += 5;
    });

    // Reflection Questions
    if (yPosition > 200) {
        doc.addPage();
        yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Reflection Questions', 20, yPosition);
    yPosition += 10;

    const reflections = [
        { question: 'Which CLEAR framework element was most important for getting good AI responses?', answer: teamData.reflection1 },
        { question: 'What surprised you about the AI\'s suggestions or approach?', answer: teamData.reflection2 },
        { question: 'How did iterating and refining prompts improve your results?', answer: teamData.reflection3 }
    ];

    reflections.forEach((reflection, index) => {
        if (yPosition > 240) {
            doc.addPage();
            yPosition = 20;
        }

        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text(`${index + 1}. ${reflection.question}`, 20, yPosition);
        yPosition += 8;

        doc.setFont(undefined, 'normal');
        if (reflection.answer.trim()) {
            const lines = doc.splitTextToSize(reflection.answer, maxWidth);
            lines.forEach(line => {
                if (yPosition > 280) {
                    doc.addPage();
                    yPosition = 20;
                }
                doc.text(line, 20, yPosition);
                yPosition += lineHeight;
            });
        } else {
            doc.text('(No response provided)', 20, yPosition);
            yPosition += lineHeight;
        }
        yPosition += 8;
    });

    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let semester = '';

    if (month < 5) semester = '10'; 					// Spring
    else if (month > 7 && date < 15) semester = '80';   // Fall 
    else semester = '50';							    // Summer
    let fullDate = `${year}${semester}`;

    // Save the PDF
    const fileName = `csci1100_${fullDate}_${teamData.teamName.replace(/[^a-z0-9]/gi, '_')}_ai_lab_report.pdf`;
    doc.save(fileName);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') changePage(-1);
    if (e.key === 'ArrowRight') changePage(1);
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    updateProgress();
});