## Introduction to Data Literacy

**Definition:**
Data literacy is the ability to read, understand, create, and communicate data. It enables informed decision-making based on data analysis.

**Key concerns to emphasize:**
- Understanding data sources and data types
- Understanding the context in which data is used
- Accurately interpreting trends and behaviors to make informed inferences

**Opening hook:**
> "Every day on the internet, 34 million TikTok videos are posted, 1.3 billion photos are shared on Instagram, and approximately 403 million terabytes of new data are created. A terabyte is 1,000 gigabytes, so this represents an enormous amount of data being generated constantly."

**Historical context (volume of information over time):**
![[Pasted image 20250303143912.png]]
Above: Image from Information Architecture, 4th ed., Ch. 7, by Rosenfeld, Morville, & Arango

## Defining Data

**Core definitions:**
1. "Values representing a specific concept or concepts." (data.gov)
2. "Raw figures, numbers, or text that serve as the starting point of analysis."

**Important distinction:**
Data becomes information when we analyze it and combine it with other data sources to determine meaning and context.

### Data Categorizations

**Qualitative vs. Quantitative Data:**

| Qualitative Data | Quantitative Data |
|------------------|-------------------|
| Descriptive data that cannot be measured numerically | Numerical data that can be measured and analyzed statistically |
| Examples: opinions, observations, experiences, months, demographic groups | Examples: test scores, sales figures, experiment results |
| Provides rich, in-depth insights into behaviors, attitudes, and experiences | Allows for statistical analysis, trend identification, and data-driven decision-making |

**Structured vs. Unstructured Data:**

| Structured Data | Unstructured Data |
|-----------------|-------------------|
| Typically quantitative—highly organized in standard formats | Typically qualitative—lacks predefined format |
| Examples: dates, names, addresses, credit card numbers | Examples: text messages, social media posts, sensor data streams |
| Easier to process and analyze | Requires more preprocessing before analysis |

**Visual representation (concept map):**

```
                        DATA
                         │
          ┌──────────────┼──────────────┐
          │                             │
    QUANTITATIVE                   QUALITATIVE
    (Numerical)                    (Descriptive)
          │                             │
          ├──────────────┐              ├──────────────┐
          │              │              │              │
      STRUCTURED     UNSTRUCTURED   STRUCTURED     UNSTRUCTURED
    (e.g., database   (e.g., IoT    (e.g., survey    (e.g., open-
       records)        readings)      categories)    ended responses)
```

## Visualizing Data

**Common Chart Types and Their Uses:**

1. **Column/Bar Chart**
   - Best for: Comparing values across categories or comparing value changes over time for a single category
   - Key guidelines:
     - Start the numerical axis at zero
     - Limit to 5-7 categories
     - For time data, use x-axis progressing left to right

2. **Pie Chart**
   - Best for: Showing proportional relationships of parts of a whole
   - Key guidelines:
     - Ensure segments total 100%
     - Limit to 5 categories (ideally just 2-3)
     - Avoid when category values are very similar or unrelated

3. **Line Chart**
   - Best for: Showing trends over time
   - Key guidelines:
     - Typically start axes at zero
     - Don't skip values for consistent data intervals
     - Time goes on x-axis, progressing left to right

**Visual decision tree for chart selection:**

```
WHAT DO YOU WANT TO SHOW?
│
├── COMPARISON BETWEEN CATEGORIES → Bar/Column Chart
│
├── PARTS OF A WHOLE → Pie Chart (if ≤5 categories)
│
└── CHANGE OVER TIME → Line Chart
```

## The Big Picture: The DIKW Model

**The DIKW Pyramid:**
1. **Data**: Raw figures, numbers, or text; the starting point of analysis
2. **Information**: Processed data with context; gathered via analytics platforms or deciphered by analytics teams
3. **Knowledge**: Synthesis of multiple information sources over time; often in the form of frameworks and theories
4. **Wisdom**: A state of awareness, a set of principles to act upon

**Alternative view:**
Think of the DIKW model as an upside-down pyramid or funnel, where each level represents further abstraction from raw data, similar to how sales funnels narrow down from awareness to action.

**Case study - Grocery store eggs and milk:**
- **Data**: Records of egg/milk sales, dates, times, inventory levels, delivery schedules, customer preferences, external factors
- **Information**: Sales reports, inventory status, customer trends, supplier performance
- **Knowledge**: Demand forecasting, stock management understanding, customer behavior insights
- **Wisdom**: Optimizing inventory, choosing reliable suppliers, implementing sustainability practices

## The Data Life Cycle (DLC)

**Definition:**
The stages data goes through from initial creation/collection to eventual disposal.

**Six stages:**
1. **Create/Collect**: Gather data from various sources (customer interactions, sensors, transactions)
2. **Store**: Place data in databases, warehouses, cloud storage
3. **Use**: Process and analyze data to extract insights and support decisions
4. **Share**: Distribute insights across organization or with external stakeholders
5. **Archive**: Store inactive data for legal, historical, or recovery purposes
6. **Destroy**: Securely delete data that's no longer needed

**Relationship to DIKW model:**
- Data → Stages 1-2 (Create/Collect, Store)
- Information → Stages 3 (Use/Processing)
- Knowledge → Stages 3-4 (Analysis and Sharing)
- Wisdom → Applied throughout but especially in decision-making from stages 3-4

**Why DLC matters:**
1. **Efficiency**: Proper management ensures timely decision-making
2. **Compliance**: Helps meet legal and regulatory requirements
3. **Cost management**: Reduces storage, processing, and security breach costs
4. **Security**: Protects sensitive data from unauthorized access

**Real-world application:**
Amazon's predictive analytics can anticipate customer orders and stock items in warehouses close to customers before they even place orders, leading to reduced delivery times and greater customer satisfaction.

## Storytelling with Data

**Why storytelling matters:**
- Makes data more engaging, understandable, and memorable
- Simplifies complex trends
- Persuades audience more effectively than raw data

**Elements of effective data stories:**
1. A clear storyline guiding the audience through the data
2. Visualizations that support the narrative and highlight key insights
3. A call to action that compels the audience to respond

**Example:**
Pew Research article on smartphone use in schools tells a story about teachers facing challenges with student cellphone use, using charts to illustrate why certain policies might be implemented.

**Best practices:**
1. **Keep it simple**: Focus on key insights rather than overwhelming with data
2. **Use consistent visuals**: Ensure visualizations align with the narrative
3. **Focus on storyline**: Let data support the story, not vice versa

## Misinterpreting Charts

**Common misleading techniques:**

1. **Omitting the baseline**
   - Starting y-axis at non-zero value makes differences appear larger
   - Proper approach: Start at zero to show true proportions

2. **Manipulating the y-axis**
   - Stretching or compressing scale to exaggerate or minimize changes
   - Proper approach: Use proportionate scales appropriate to the data

3. **Cherry-picking data**
   - Selecting only favorable data points
   - Proper approach: Show complete datasets that reveal the full picture

4. **Using the wrong graph type**
   - E.g., pie charts for comparing unrelated categories
   - Proper approach: Match chart type to the data relationship being shown

5. **Breaking conventions**
   - E.g., using darker colors to represent lower values on maps
   - Proper approach: Follow established visual conventions (darker = more)

## Key Takeaways

1. Data literacy is essential in our data-rich world
2. Understanding different data types helps determine appropriate analysis methods
3. Selecting the right visualization is crucial for effective communication
4. The DIKW model shows how raw data becomes actionable wisdom
5. The Data Life Cycle provides a framework for responsible data management
6. Storytelling makes data meaningful and actionable
7. Critical evaluation of charts prevents misinterpretation

## Discussion Questions

1. How might you apply the DIKW model to a current project or decision in your life?
2. What examples of misleading charts have you encountered in media or advertising?
3. How could storytelling with data be applied in your field or area of interest?
4. What ethical considerations arise when collecting and using data?

---

## Visual Aids for Lecture

### The DIKW Pyramid
```
        ┌────────────┐
        │  WISDOM    │
        │(Principles)│
        └─────┬──────┘
              │
      ┌───────┴───────┐
      │   KNOWLEDGE   │
      │  (Synthesis)  │
      └───────┬───────┘
              │
    ┌─────────┴──────────┐
    │    INFORMATION     │
    │ (Context & Meaning)│
    └─────────┬──────────┘
              │
  ┌───────────┴────────────┐
  │         DATA           │
  │  (Raw figures & facts) │
  └────────────────────────┘
```

### Data Life Cycle
```
             ┌───────────┐
             │  Create/  │
             │  Collect  │
             └─────┬─────┘
                   │
┌────────┐    ┌────┴────┐    ┌─────────┐
│ Destroy│◄───┤  Store  ├───►│   Use   │
└────┬───┘    └─────────┘    └────┬────┘
     │                            │
     │        ┌─────────┐         │
     └────────┤ Archive ◄─────────┘
              └────┬────┘
                   │
              ┌────┴────┐
              │  Share  │
              └─────────┘
```

### Chart Selection Guide
```
                                  WHAT DO YOU WANT TO SHOW?
┌──────────────────────────────────┼────────────────────────────┐
│                                  │                            │
▼                                  ▼                            ▼
COMPARISON                     COMPOSITION                 RELATIONSHIP
between categories          (parts of a whole)          (trends over time)
│                                  │                            │
▼                                  ▼                            ▼
BAR/COLUMN CHART               PIE CHART                    LINE CHART
• Start y-axis at zero     • Ensure sum = 100%        • Show continuous data
• Limit to 5-7 categories  • Limit to 5 categories    • Don't skip intervals
• Categories on x-axis     • Use for proportions      • Time on x-axis (L→R)
```

### Common Data Visualization Pitfalls
```
┌──────────────────────────────────────────────────────────────┐
│                MISLEADING VISUALIZATION TACTICS              │
├────────────────────┬───────────────────┬─────────────────────┤
│ BASELINE OMISSION  │   AXIS DISTORTION │ CHERRY-PICKING DATA │
│   starting y-axis  │ disproportionate  │  selective data     │
│   above zero       │  axis scaling     │  inclusion          │
├────────────────────┼───────────────────┼─────────────────────┤
│    WRONG CHART     │    CONVENTION     │    INADEQUATE       │
│       TYPE         │     VIOLATION     │     CONTEXT         │
│ mismatched chart   │ breaking standard │ missing labels or   │
│ for data relation  │ visual conventions│ crucial information │
└────────────────────┴───────────────────┴─────────────────────┘
```
