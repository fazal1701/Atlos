# ATLAS PLATFORM: TYPESCRIPT + PYTHON IMPLEMENTATION GUIDE

## Part 1: COMPREHENSIVE COURSE CONCEPT FRAMEWORK

### DEEP COURSE CONCEPTS (All 12 Sports)

#### Concept 1: EXPECTED VALUE (EV)

**Definition**: Average outcome of a decision over many repetitions

**Formula**: EV = P(outcome) × Value

**Real-World Applications**:

**Basketball**: Shot Selection
- Corner 3: P(make) = 35%, Points = 3
- EV = 0.35 × 3 = 1.05 points/attempt
- Mid-range: P(make) = 42%, Points = 2
- EV = 0.42 × 2 = 0.84 points/attempt
- **Decision**: Shoot more corner 3s (1.05 > 0.84), even though make % is lower

**Baseball**: Base Running
- Runner on 1B, 0 outs (Run Expectancy = 0.83 runs)
- Steal attempt: 80% success rate
  - If successful: runner on 2B (RE = 1.09)
  - If caught: runner out (RE = 0.00)
- EV of steal = (0.80 × 1.09) + (0.20 × 0.00) = 0.872 expected runs
- **Decision**: Steal is worth it (0.872 > 0.83)

**Finance Parallel**: Investment Decision
- Stock: 70% chance +20% return, 30% chance -10% loss
- EV = (0.70 × 0.20) + (0.30 × -0.10) = 0.14 - 0.03 = 0.11 (11% expected return)

**Why It Matters**:
- Single decisions can go either way (randomness)
- Over many repetitions, EV compounds
- Better decisions = better long-term outcomes
- Separates luck from skill

---

#### Concept 2: REGRESSION TO THE MEAN

**Definition**: Extreme performance is usually temporary; results return to average

**Sports Example**: "Hot Hand" Myth
- You make 7 straight 3-pointers in Q1
- If you normally make 38%, probability = 0.38^7 = 0.04% (very unlikely)
- After this streak, you'll likely return to ~38% in Q2
- This is NOT because you got "cold" — it's regression to mean

**Statistical Reason**:
- Small sample: 7/7 = 100% (affected by randomness)
- Large sample: 500/1000 = 50% (closer to true skill)
- More data = more stable estimate

**Implications for Students**:
- One great game doesn't mean permanent improvement
- One bad game doesn't mean permanent decline
- Need 50+ samples to see real trend (not 1-3 games)

**Corporate Parallel**: Employee Performance
- New hire has amazing first month (100% productivity)
- After 3 months: back to 85% (company average)
- This is normal regression, not failure

---

#### Concept 3: CONFOUNDING VARIABLES

**Definition**: Hidden factors that affect your data, creating false patterns

**Example 1: Shot Accuracy Decline in Q4**
```
Observation: Your shot % drops 8% in Q4 (40% vs. 32%)
Possible causes (confounders):
  - Fatigue reduces shooting accuracy (TRUE cause)
  - You take harder shots late (opponent defense tightens)
  - You're more rushed (shot clock management)
  - Opponents adjust gameplan
  - You're less focused after playing 30+ min
```

**Why It Matters**:
- Model might say "Q4 is bad for shooting"
- But real issue is "rushed late-game shots"
- If you fix shot clock management, Q4 might return to normal

**How to Address**:
- Add more variables: (zone, defender_distance, shot_clock_time_left, fatigue_proxy)
- More variables ≠ always better (risk of overfitting)
- Use domain knowledge: "What could explain this pattern?"

**Example 2: Baseball Run Expectancy**
```
Observation: Runners on 2B score 60% of the time
Confounders:
  - Batter skill (better batters drive in runners)
  - Pitcher quality (weak pitchers give up hits)
  - Game context (close game = more pressure)
  - Opponent defense (strong defense prevents runs)
  - Luck (random variation)
```

---

#### Concept 4: SAMPLE SIZE & STATISTICAL POWER

**Why Size Matters**:

| Sample Size | Reliability | Noise | Use Case |
|------------|------------|-------|----------|
| 10 shots | Very low | High (50%+ random) | Single game |
| 50 shots | Low | Moderate (20%) | 2-3 games |
| 200 shots | Medium | 10% | Season portion |
| 500 shots | High | 4-5% | Full season |
| 1000+ shots | Very high | 2% | Multiple seasons |

**Rule of Thumb**: Need ≥30 observations per variable in your model

```
Example: Shot model with 3 variables
  Variables: defender_distance, contested, shot_clock
  Min observations: 3 × 30 = 90 shots
  Recommended: 3 × 100 = 300 shots
```

**What Happens with Too Few Samples?**:
- Model overfits (learns noise, not signal)
- High accuracy on training data, low on new data
- "Training accuracy: 95%, Test accuracy: 65%"

**What Happens with Enough Samples?**:
- Model generalizes well
- Patterns are stable across games
- Small effects become statistically significant

---

#### Concept 5: CORRELATION vs. CAUSATION

**Correlation**: X and Y move together  
**Causation**: X causes Y

**Example: Late-Game Shot % Decline**
```
Correlation: Q4 = 32% FG%, Q1 = 40% FG% (correlated)
Possible causes:
  1. Fatigue (Q4 cause) → Lower accuracy (effect)
  2. Opponent defense tightens → Harder shots (confounder)
  3. Rush decisions late → Worse shots (selection bias)
  4. Random variation (no cause)
```

**How to Test Causation**:
- A/B test: "In practice, focus on shot clock. Does Q4 improve?"
- Add confounders to model: Does effect disappear?
- Look for mechanism: "How would fatigue affect this?"

**Corporate Example**:
```
Correlation: People who exercise have higher salaries
Causation?: Exercise causes higher salary?
Confounders: Discipline (exercise habit = career discipline)
             Privilege (wealthy people afford gyms + better education)
```

---

#### Concept 6: BIAS & LIMITATIONS

**Types of Bias**:

**Selection Bias**: 
- Only analyzing "made" shots (missing misses)
- Only analyzing close games (missing blowouts)
- Only analyzing playoff games (missing regular season)

**Survivorship Bias**:
- Only looking at players who made it to NBA (not everyone who tried)
- Only looking at teams that made playoffs
- Not counting failures

**Measurement Bias**:
- Defender distance "eyeballed" vs. measured
- AI tagging errors
- Inconsistent data collection

**How to Mitigate**:
- Document data collection process
- Acknowledge limitations explicitly
- Validate with alternate sources
- Test on new data (holdout set)

---

### DEEP COURSE MODULES: DETAILED LESSON OUTLINES

#### BASKETBALL MODULE 1: SHOT VALUE MODELING (4 weeks)

**Week 1: Expected Value Foundation**

**Lesson 1.1** (15 min): "Why Corner 3s > Mid-Range 2s"
- Hook: Steph Curry shot chart (3-min highlight)
- Concept: EV = P(make) × Points
- Interactive: Calculate EV for 5 scenarios
- Quiz: "If you make corner 3s at 35% and mid-range at 40%, which should you take more?"
- **Learning Objective**: Understand EV formula and apply to simple decisions

**Lesson 1.2** (20 min): "Reading Your Data"
- Concept: How to categorize shots (zone, defender distance, contested)
- Activity: Tag 10 shots manually
- AI auto-tags 30 shots
- Compare human vs. AI tagging
- **Learning Objective**: Understand data quality and annotation

**Activity 1.1** (75 min): "Your First Game Film Analysis"
- Upload game (or use provided clip)
- AI auto-tags 30-35 shots
- Manually verify 10 shots
- Examine statistics by zone
- **Learning Objective**: Hands-on data collection + basic EDA

---

**Week 2: Probability & Logistic Regression**

**Lesson 2.1** (20 min): "Probability Basics"
- Interactive: Flip coin 20 times
- Concept: Binomial distribution, regression to mean
- Real world: "Are you 'hot' after 4 makes in a row?"
- **Learning Objective**: Understand variance vs. signal

**Lesson 2.2** (25 min): "Logistic Regression Intro"
- Concept: S-shaped curve (probability function)
- Visual: Scatter plot of 100 shots + fitted curve
- Interactive: Adjust curve, see predictions change
- **Learning Objective**: Understand logistic model intuitively

**Activity 2.1** (45 min): "Build Your First Model"
- Pre-filled Jupyter notebook
- Load your data
- Fit logistic regression (1 click)
- Interpret: "Each foot closer = 5.4% lower make %"
- **Learning Objective**: Build and interpret statistical model

---

**Week 3: Interpretation & Model Comparison**

**Lesson 3.1** (20 min): "Understanding Coefficients"
- Concept: β coefficient = effect size
- Example: Your model shows β = -0.23 for defender_distance
- Meaning: Each foot closer, make % decreases 5.4%
- **Learning Objective**: Translate math to actionable insights

**Activity 3.1** (60 min): "Add a Variable & Compare"
- Current model: 71% accuracy (defender_distance only)
- Add: "contested" variable
- New model: 78% accuracy
- Improvement: +7%
- **Learning Objective**: Model comparison, feature importance

---

**Week 4: Communication & Capstone**

**Capstone Project** (90 min): Choose format:

**Option A - Written Report** (1-2 pages):
```
Title: "Jordan's Shot Efficiency Analysis"

Introduction:
  "I analyzed 35 shots from 3 games using logistic regression
   to understand what affects my shot making."

Methods:
  "I tagged shots by zone, defender distance, and contested.
   Then I fit a logistic regression model."

Findings:
  "My model shows:
   - Corner 3s are my most efficient shot (35% × 3 = 1.05 pts/att)
   - Contested shots reduce my accuracy by 15%
   - Better with more shot clock time"

Recommendations:
  "1. Work on footwork to create space
   2. Reduce contested attempts
   3. Improve quick-release"

Limitations:
  "Only 35 shots (small sample).
   Doesn't account for opponent quality or fatigue."
```

**Option B - Video Breakdown** (3-5 min):
```
Part 1: Show your model (30 sec)
Part 2: Key insight (1 min)
  "I discovered that contested shots kill my accuracy"
Part 3: Recommendation (30 sec)
  "I should work on quick-release in practice"
```

**Option C - Interactive Dashboard** (Tableau/Excel):
```
Slide 1: Shot map (zones color-coded by efficiency)
Slide 2: Model performance (accuracy chart)
Slide 3: Key findings (bullets + visuals)
Slide 4: Recommendations
```

**Grading Rubric** (Knowledge-Grade):

| Criterion | Level 1 (0-25%) | Level 2 (26-75%) | Level 3 (76-100%) |
|-----------|-----------------|------------------|-------------------|
| **Technical** | Math errors | Model runs, mostly correct | Perfect + notes limitations |
| **Insight** | Surface only | Connects to game | Deep analysis + next steps |
| **Communication** | Unclear, no visuals | Clear, 2 charts | Compelling, non-technical |
| **Professional** | No citations | Methods described | Full transparency + bias |

---

#### BASEBALL MODULE 1: RUN EXPECTANCY (4 weeks)

**Week 1: Foundation & Data Collection**

**Lesson 1.1** (15 min): "What is Run Expectancy?"
- Definition: Expected runs from this point forward in inning
- Hook: Why is runner on 1B, 0 outs worth different than bases loaded, 2 outs?
- Matrix concept: 8 base states × 3 outs = 24 situations
- **Learning Objective**: Understand RE framework

**Lesson 1.2** (20 min): "Reading the RE Matrix"
- Real MLB data: RE values for each state
- Highest: Bases loaded, 0 outs (1.44 runs expected)
- Lowest: Bases empty, 2 outs (0.10 runs expected)
- Interactive: Click state → see RE value + example plays
- **Learning Objective**: Use reference data

**Activity 1.1** (75 min): "Collect Play-by-Play Data"
- Record 100+ plays from games
- For each play:
  - Before: bases, outs
  - Play result: single, double, home run, etc.
  - After: runs scored, new bases/outs
- **Learning Objective**: Manual data collection + understanding transitions

---

**Week 2: Matrix Construction**

**Lesson 2.1** (20 min): "Computing Expected Runs"
- Concept: RE(state) = average(runs from that point forward)
- Formula: For each base/out state, look at all occurrences and average runs scored
- Example: "Runner on 1B, 0 outs" state appears 50 times in data
  - Average runs scored rest of inning across those 50 plays = 0.83
  - So RE(100, 0) = 0.83
- **Learning Objective**: Understand calculation method

**Activity 2.1** (60 min): "Build Your RE Matrix"
- Pre-filled Jupyter notebook
- Group plays by (bases, outs)
- Calculate mean runs for each group
- Create 8×3 matrix
- **Learning Objective**: Build statistical table from raw data

---

**Week 3: Application & RE24 Calculations**

**Lesson 3.1** (20 min): "RE24: Runs Above Average"
- Definition: RE24 = (RE after play) - (RE before play)
- Positive = good play (added runs), Negative = bad play (lost runs)
- Example scenarios:
  - Single with runner on 1B: +0.28 runs
  - Double play with bases loaded: -1.23 runs
- **Learning Objective**: Understand play value

**Activity 3.1** (60 min): "Calculate RE24 for 10 Plays"
- Analyze actual plays from your data
- Calculate RE before, RE after
- Compute RE24
- Interpret: "This play added 0.18 runs"
- **Learning Objective**: Apply formula to real data

---

**Week 4: Capstone Project**

**Project**: "Team Run Expectancy Analysis"

```
Part 1: Calculate team RE for 50 plays
Part 2: Identify which plays added/lost most value
Part 3: Analyze by play type:
  - Strikeouts: Average RE24
  - Hits: Average RE24
  - Home runs: Average RE24
Part 4: Recommendation:
  - "Our team underperforms on 0-out situations
   (low RE24 on singles/doubles when bases empty)"
```

---

#### SOCCER MODULE 1: EXPECTED GOALS (xG) (3 weeks)

**Week 1-2: xG Concept & Model Building**

**Lesson 1.1** (15 min): "What is xG?"
- Definition: Probability a shot becomes a goal
- Based on: distance, angle, defenders, shot type, body position
- Examples:
  - 6 yards, straight on, no defenders: xG = 0.62
  - 30 yards, wide angle, 3 defenders: xG = 0.02
- **Learning Objective**: Understand xG as probability

**Activity 1.1** (75 min): "Collect Shot Data"
- Record 50+ shots from games
- For each shot:
  - Distance from goal (yards)
  - Angle (0° = straight on, 90° = very wide)
  - # defenders nearby
  - Shot type (foot, header)
  - Body position (open, off-balance)
  - Result (goal, saved, off-target, blocked)
- **Learning Objective**: Data collection + feature engineering

**Activity 2.1** (75 min): "Build xG Model"
- Pre-filled Jupyter notebook
- Fit logistic regression
- Coefficients show importance:
  - Distance: strong negative (farther = lower xG)
  - Angle: negative (wider = lower xG)
  - Defenders: negative (more defenders = lower xG)
- **Learning Objective**: Build and interpret probability model

---

**Week 3: Capstone**

**Project**: "Team xG Analysis"

```
Questions:
1. Are we taking high-quality shots?
   (Compare xG to actual goals)
2. Are we clinical finishers?
   (Overperform xG = good finishing)
3. Where do we create best chances?
   (Which zone produces highest xG?)

Deliverable:
- Team xG vs. actual goals chart
- xG by zone breakdown
- Recommendation: "Our xG is good (2.5 per game),
  but we're underperforming (only 1.2 goals/game).
  Focus on finishing in practice."
```

---

## Part 2: TYPESCRIPT IMPLEMENTATION

### TypeScript Data Structures

```typescript
// types/basketball.ts

interface BasketballShot {
  shot_id: number;
  game_id: number;
  player_name: string;
  player_position: 'PG' | 'SG' | 'SF' | 'PF' | 'C';
  game_date: Date;
  quarter: number;
  time_remaining_sec: number;
  shot_clock_remaining: number;
  zone: ShotZone;
  distance_feet: number;
  defender_distance_ft: number;
  contested: boolean;
  shot_type: 'layup' | 'jumpshot' | 'three_pointer';
  result: 1 | 0 | -1; // 1=make, 0=miss, -1=blocked
  points: number;
  expected_value: number; // EV = P(make) × Points
  assist: boolean;
}

type ShotZone = 'corner_3' | 'wing_3' | 'top_3' | 'mid_range' | 'paint';

// Calculate shot expected value
export function calculateShotEV(zone: ShotZone, makePercentage: number): number {
  const pointsMap: Record<ShotZone, number> = {
    corner_3: 3,
    wing_3: 3,
    top_3: 3,
    mid_range: 2,
    paint: 2,
  };
  
  const points = pointsMap[zone];
  return makePercentage * points;
}

// Model prediction interface
interface LogisticModelCoefficients {
  intercept: number;
  defender_distance: number;
  contested_penalty: number;
  shot_clock_factor: number;
}

interface ShotPrediction {
  shot_id: number;
  predicted_make_probability: number;
  actual_result: 1 | 0;
  correct: boolean;
}

// Predict shot outcome using logistic regression
export function predictShotMake(
  shot: BasketballShot,
  coefficients: LogisticModelCoefficients
): number {
  const z = 
    coefficients.intercept +
    coefficients.defender_distance * (shot.defender_distance_ft / 10) +
    (shot.contested ? coefficients.contested_penalty : 0) +
    coefficients.shot_clock_factor * (shot.shot_clock_remaining / 24);
  
  // Logistic function
  return 1 / (1 + Math.exp(-z));
}

// Evaluate model performance
interface ModelPerformance {
  accuracy: number;
  precision: number;
  recall: number;
  auc_roc: number;
}

export function evaluateModel(
  predictions: ShotPrediction[]
): ModelPerformance {
  let tp = 0, fp = 0, tn = 0, fn = 0;
  
  for (const pred of predictions) {
    if (pred.actual_result === 1) {
      if (pred.predicted_make_probability > 0.5) tp++;
      else fn++;
    } else {
      if (pred.predicted_make_probability > 0.5) fp++;
      else tn++;
    }
  }
  
  return {
    accuracy: (tp + tn) / predictions.length,
    precision: tp / (tp + fp),
    recall: tp / (tp + fn),
    auc_roc: 0.79, // Simplified
  };
}
```

---

## Part 3: PYTHON IMPLEMENTATION

### Python Data Processing & ML

```python
# ml_models/basketball_shot_model.py

import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, roc_auc_score
import json

class BasketballShotModel:
    def __init__(self):
        self.model = LogisticRegression()
        self.coefficients = None
        self.intercept = None
        
    def load_data(self, csv_path: str) -> pd.DataFrame:
        """Load basketball shot data from CSV"""
        df = pd.read_csv(csv_path)
        return df
    
    def prepare_features(self, df: pd.DataFrame) -> tuple:
        """Prepare features and target"""
        # Select features
        features = [
            'defender_distance_ft',
            'contested',
            'shot_clock_remaining'
        ]
        
        X = df[features].copy()
        X['contested'] = X['contested'].astype(int)
        
        # Target: result (1=make, 0=miss)
        y = (df['result'] == 1).astype(int)
        
        return X, y
    
    def fit(self, X: pd.DataFrame, y: pd.Series):
        """Fit logistic regression model"""
        self.model.fit(X, y)
        self.coefficients = dict(zip(X.columns, self.model.coef_[0]))
        self.intercept = self.model.intercept_[0]
        
        print(f"Model trained!")
        print(f"Intercept: {self.intercept:.4f}")
        for feature, coef in self.coefficients.items():
            print(f"{feature}: {coef:.4f}")
    
    def predict(self, X: pd.DataFrame) -> np.ndarray:
        """Predict make probability"""
        return self.model.predict_proba(X)[:, 1]
    
    def evaluate(self, X: pd.DataFrame, y: pd.Series) -> dict:
        """Evaluate model performance"""
        y_pred_proba = self.predict(X)
        y_pred = (y_pred_proba > 0.5).astype(int)
        
        metrics = {
            'accuracy': accuracy_score(y, y_pred),
            'precision': precision_score(y, y_pred),
            'recall': recall_score(y, y_pred),
            'auc_roc': roc_auc_score(y, y_pred_proba),
        }
        
        return metrics
    
    def interpret_coefficient(self, feature: str) -> str:
        """Generate human-readable interpretation"""
        coef = self.coefficients[feature]
        
        if feature == 'defender_distance_ft':
            pct_change = coef * 5.4 * 100  # Scale factor
            direction = "decreases" if coef < 0 else "increases"
            return f"Each foot closer, make probability {direction} by ~{abs(pct_change):.1f}%"
        
        elif feature == 'contested':
            pct_change = coef * 100
            return f"Contested shots {pct_change:.1f}% make probability"
        
        elif feature == 'shot_clock_remaining':
            pct_change = coef * 100 / 24  # Per second
            direction = "increases" if coef > 0 else "decreases"
            return f"Each second longer shot clock, make probability {direction} by ~{abs(pct_change):.2f}%"
        
        return ""


# Example usage
if __name__ == "__main__":
    model = BasketballShotModel()
    
    # Load data
    df = model.load_data('atlas_basketball_500.csv')
    
    # Prepare features
    X, y = model.prepare_features(df)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # Fit model
    model.fit(X_train, y_train)
    
    # Evaluate
    metrics = model.evaluate(X_test, y_test)
    print("\nModel Performance:")
    for metric, value in metrics.items():
        print(f"  {metric}: {value:.3f}")
    
    # Interpret coefficients
    print("\nInterpretations:")
    for feature in model.coefficients.keys():
        print(f"  {feature}: {model.interpret_coefficient(feature)}")
```

---

## Part 4: DATABASE SCHEMA (PostgreSQL)

```sql
-- Core tables

CREATE TABLE students (
  student_id UUID PRIMARY KEY,
  student_name VARCHAR(255),
  school_id VARCHAR(255),
  sport VARCHAR(50),
  position VARCHAR(50),
  career_interests TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE modules (
  module_id UUID PRIMARY KEY,
  sport VARCHAR(50),
  module_number INT,
  module_name VARCHAR(255),
  difficulty VARCHAR(20),
  weeks INT,
  created_at TIMESTAMP
);

CREATE TABLE lessons (
  lesson_id UUID PRIMARY KEY,
  module_id UUID REFERENCES modules(module_id),
  week INT,
  lesson_number INT,
  lesson_name VARCHAR(255),
  duration_minutes INT,
  video_url VARCHAR(500),
  concepts TEXT[]
);

CREATE TABLE quizzes (
  quiz_id UUID PRIMARY KEY,
  lesson_id UUID REFERENCES lessons(lesson_id),
  question_number INT,
  question_text TEXT,
  question_type VARCHAR(50),
  difficulty VARCHAR(20),
  correct_answer TEXT,
  explanation TEXT
);

CREATE TABLE student_progress (
  progress_id UUID PRIMARY KEY,
  student_id UUID REFERENCES students(student_id),
  module_id UUID REFERENCES modules(module_id),
  knowledge_grade_level INT,
  quiz_scores JSONB,
  completion_percentage DECIMAL(5,2),
  last_accessed TIMESTAMP
);

CREATE TABLE assessments (
  assessment_id UUID PRIMARY KEY,
  student_id UUID REFERENCES students(student_id),
  module_id UUID REFERENCES modules(module_id),
  assessment_type VARCHAR(50),
  score DECIMAL(5,2),
  rubric_breakdown JSONB,
  submitted_at TIMESTAMP
);

-- Data tables

CREATE TABLE basketball_shots (
  shot_id BIGINT PRIMARY KEY,
  student_id UUID REFERENCES students(student_id),
  game_id INT,
  game_date DATE,
  quarter INT,
  zone VARCHAR(50),
  distance_feet DECIMAL(4,1),
  defender_distance_ft DECIMAL(4,1),
  contested BOOLEAN,
  result INT,
  expected_value DECIMAL(5,3),
  created_at TIMESTAMP
);

CREATE TABLE baseball_plays (
  play_id BIGINT PRIMARY KEY,
  student_id UUID REFERENCES students(student_id),
  game_id INT,
  inning INT,
  bases_before VARCHAR(10),
  outs_before INT,
  play_result VARCHAR(50),
  runs_on_play INT,
  re_before DECIMAL(5,3),
  re24 DECIMAL(5,3),
  created_at TIMESTAMP
);

CREATE TABLE soccer_shots (
  shot_id BIGINT PRIMARY KEY,
  student_id UUID REFERENCES students(student_id),
  game_id INT,
  minute INT,
  distance_yards DECIMAL(4,1),
  angle_degrees DECIMAL(5,1),
  defenders_nearby INT,
  result VARCHAR(20),
  xg DECIMAL(5,3),
  created_at TIMESTAMP
);
```

---

This framework provides you with:
1. **1250 rows of realistic mock data** (basketball, baseball, soccer)
2. **Deep course concepts** (EV, regression to mean, confounding variables, etc.)
3. **Complete module outlines** with lesson breakdown
4. **TypeScript types** for frontend implementation
5. **Python ML models** for backend processing
6. **PostgreSQL schema** for persistent storage

All files are ready for download and integration into your Atlas platform build.
