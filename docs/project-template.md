# Project Template 📋

Use this template when creating new ML projects or DSA problem sets.

---

## ML Project Template

### Directory Structure
```
project-name/
├── README.md
├── requirements.txt
├── .env.example
├── data/
│   ├── raw/
│   ├── processed/
│   └── exploratory/
├── notebooks/
│   ├── 01-eda.ipynb
│   ├── 02-preprocessing.ipynb
│   ├── 03-modeling.ipynb
│   └── 04-evaluation.ipynb
├── src/
│   ├── __init__.py
│   ├── data_preprocessing.py
│   ├── model.py
│   ├── train.py
│   ├── evaluate.py
│   └── utils.py
├── models/
│   └── best_model.pkl
└── results/
    ├── plots/
    ├── metrics.json
    └── summary_report.md
```

### README.md Content Structure

```markdown
# [Project Name]

## 🎯 Problem Statement
Clear description of the problem.

## 📊 Dataset
- Source
- Size
- Features
- Data splits

## 🔍 Exploratory Data Analysis
- Distribution analysis
- Feature relationships
- Preprocessing steps

## 🏗️ Model Architecture
- Model type
- Architecture details
- Why this model?

## 📈 Results
- Performance metrics
- Key findings
- Visualizations

## 🚀 How to Run
```bash
# Installation
pip install -r requirements.txt

# Training
python src/train.py

# Evaluation
python src/evaluate.py
```

## 📚 Resources
- Related papers
- Similar projects
- Learning materials

## 🔄 Future Improvements
- [ ] Improvement 1
- [ ] Improvement 2
```

---

## DSA Problem Template

### File Structure
```
01-arrays/
├── problem-name.py      # Main solution
├── test_problem.py      # Unit tests
└── README.md           # Detailed explanation
```

### Problem Solution Template

```python
"""
Problem: [Problem Name]
Link: [URL]
Difficulty: Easy/Medium/Hard

Approach: [Algorithm]
Time Complexity: O(?)
Space Complexity: O(?)
"""

from typing import List

class Solution:
    def method_name(self, params):
        """
        Detailed explanation:
        1. Step 1
        2. Step 2
        """
        pass


# Test cases
def test_solution():
    solution = Solution()
    # Test 1
    assert solution.method_name(input1) == expected1
    # Test 2
    assert solution.method_name(input2) == expected2
```

---

## Commit Message Template

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: dsa, ml, feat, fix, docs, refactor, test, chore

**Example**:
```
dsa(arrays): solve two-sum problem

Implemented optimal O(n) solution using hash map.
Includes brute force comparison and test cases.

Closes #1
```

---

## Jupyter Notebook Template

### Structure
```python
# Cell 1: Title and Description
# Title: [Project Name]
# Description: [What this notebook does]

# Cell 2: Imports
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler

# Cell 3: Data Loading
df = pd.read_csv('data.csv')
df.head()

# Cell 4: EDA
# Plots and analysis

# Cell 5: Preprocessing
# Data cleaning and transformation

# Cell 6: Modeling
# Model training

# Cell 7: Evaluation
# Performance metrics

# Cell 8: Conclusions
# Summary and next steps
```

---

## Python File Template

```python
"""
Module docstring: Brief description of module.

This module handles [specific functionality].
"""

from typing import List, Dict, Optional


class ClassName:
    """Class docstring: Description of class."""
    
    def __init__(self, param: str) -> None:
        """Initialize the class.
        
        Args:
            param: Description of parameter
        """
        self.param = param
    
    def method_name(self, arg: str) -> bool:
        """Method description.
        
        Args:
            arg: Argument description
            
        Returns:
            bool: What it returns
            
        Raises:
            ValueError: When it raises
        """
        # Implementation
        return True


def function_name(input_data: List[int]) -> Dict[str, any]:
    """Function description.
    
    Longer description with details.
    
    Args:
        input_data: Description
        
    Returns:
        Dict with keys: 'result', 'error'
    """
    # Implementation
    return {}


if __name__ == "__main__":
    # Example usage
    result = function_name([1, 2, 3])
    print(result)
```

---

## GitHub Issue Template

```markdown
## Description
Brief description of the issue.

## Expected Behavior
What should happen?

## Actual Behavior
What actually happens?

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Environment
- OS: [e.g. Ubuntu 20.04]
- Python: [e.g. 3.9]
- Package Version: [e.g. 1.0]

## Additional Context
Any other relevant information.
```

---

## Pull Request Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Other

## Related Issues
Closes #[issue number]

## Changes Made
- Change 1
- Change 2

## Testing
- [x] Unit tests added
- [x] Manual testing done

## Checklist
- [ ] Code follows style guide
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally
```

---

## requirements.txt Template

```
# Core Data Science
numpy==1.24.0
pandas==2.0.0
scikit-learn==1.2.0

# Visualization
matplotlib==3.7.0
seaborn==0.12.0
plotly==5.14.0

# Deep Learning
torch==2.0.0
tensorflow==2.12.0

# Notebooks
jupyter==1.0.0
ipython==8.12.0

# Utilities
python-dotenv==1.0.0
tqdm==4.65.0
```

---

## .env.example Template

```
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=project_db
DB_USER=postgres
DB_PASSWORD=your_password

# API Keys
OPENAI_API_KEY=your_key
HUGGINGFACE_API_KEY=your_key

# Paths
DATA_PATH=./data
MODEL_PATH=./models

# Settings
DEBUG=True
BATCH_SIZE=32
EPOCHS=10
LEARNING_RATE=0.001
```

---

## README Template for Folders

```markdown
# [Folder Name]

Brief description of what this folder contains.

## 📂 Contents

### Subfolder 1
Description

### Subfolder 2
Description

## 🚀 Quick Start

```bash
cd folder-name
python script.py
```

## 📊 Results

Summary of results and findings.

## 📚 References

- Reference 1
- Reference 2
```

---

**Remember**: Use these templates as starting points. Customize them for your specific needs! 💡