# Quick Start Guide 🚀

Welcome to your professional coding portfolio! Here's how to get started.

---

## 📌 First Steps

### 1. Understand the Structure

```
coding-and-ai/
├── dsa/                    # Data Structures & Algorithms
│   ├── 01-arrays/         # Array problems and solutions
│   ├── 02-strings/        # String manipulation problems
│   └── progress-tracker.md # Your daily learning log
│
├── ml-projects/           # Machine Learning Projects
│   ├── supervised/        # Classification, Regression
│   ├── unsupervised/      # Clustering, Dimensionality Reduction
│   └── deep-learning/     # Neural Networks, Advanced Models
│
├── docs/                  # Documentation
│   ├── commit-guidelines.md
│   └── project-template.md
│
└── README.md              # Main profile (you are here!)
```

---

## 🎯 Your Daily Routine (30 Days Challenge)

### Option 1: Morning Warrior (6:00 AM - 7:30 AM)
```
6:00 - Wake up, breakfast
6:15 - Open problem on LeetCode
6:20 - Try solving without looking at hints
6:45 - Code the solution
7:00 - Test and optimize
7:15 - Commit to GitHub
7:30 - Document in progress tracker
```

### Option 2: Evening Learner (8:00 PM - 9:30 PM)
```
8:00 - Review problem
8:10 - Plan approach
8:20 - Code solution
8:40 - Run test cases
8:50 - Optimize complexity
9:00 - Create commit
9:15 - Update tracker
9:30 - Sleep (you're done!)
```

### Option 3: Flexible Schedule
- Pick any **90 minutes** during the day
- Solve **1 DSA problem** or work on **1 ML task**
- Commit and track progress
- Consistency > timing

---

## 📝 Today's Task

### Day 1: Set Up Your Workspace

**Step 1: Clone Repository**
```bash
git clone https://github.com/chandusriii/22NH1A4203.git
cd 22NH1A4203
```

**Step 2: Create Branch**
```bash
git checkout -b my-learning-journey
```

**Step 3: Set Python Environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

**Step 4: Install Dependencies**
```bash
pip install jupyter numpy pandas scikit-learn matplotlib
```

**Step 5: Verify Setup**
```bash
python -c "import pandas; import numpy; print('✅ Ready to code!')"
```

---

## 🧠 Solve Your First Problem

### Problem: Two Sum (Easy)

**Question**: Given array `nums` and integer `target`, find two numbers that add up to `target`.

**Example**:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] == 9
```

**Steps**:
1. Read the problem carefully
2. Write approach on paper
3. Code without looking at solution
4. Test with examples
5. Optimize if needed
6. Commit to GitHub

**My Solution**:
```python
class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []
```

**Your Turn**: Create `dsa/01-arrays/my-two-sum.py` and code your solution!

---

## 💾 Your First Commit

```bash
# Make your solution file
touch dsa/01-arrays/my-two-sum.py
# Add your code

# Stage changes
git add dsa/01-arrays/my-two-sum.py

# Commit with message
git commit -m "dsa(arrays): solve two-sum problem

Implemented hash map approach for O(n) solution.
Time: O(n), Space: O(n)

Closes #1"

# Push to GitHub
git push origin my-learning-journey
```

---

## 📊 Track Your Progress

### Update `dsa/progress-tracker.md`

```markdown
### Day 1: May 30, 2026
- **Problem**: Two Sum
- **Difficulty**: Easy
- **Time**: 25 minutes
- **Status**: ✅ Solved
- **Confidence**: 7/10
- **Next**: Best Time to Buy Stock
```

---

## 📚 First Week Goals

| Day | Problem | Time | Commit |
|-----|---------|------|--------|
| Day 1 | Two Sum | 25 min | ✅ |
| Day 2 | Best Time to Buy Stock | 30 min | ✅ |
| Day 3 | Contains Duplicate | 20 min | ✅ |
| Day 4 | Valid Parentheses | 35 min | ✅ |
| Day 5 | Product of Array | 40 min | ✅ |
| Day 6 | Review & Optimize | 60 min | ✅ |
| Day 7 | Rest & Plan | 30 min | - |

---

## 🎯 Weekly Reflection (Every Sunday)

Answer these questions:

1. **Problems Solved**: How many this week?
2. **Confidence Level**: On a scale of 1-10?
3. **Topics Mastered**: Which concepts clicked?
4. **Challenges**: What was difficult?
5. **Next Week**: What's your focus?

**Example**:
```markdown
### Week 1 Reflection
- Solved: 5 problems
- Confidence: 6/10
- Mastered: Hash maps, Two pointers
- Challenging: Complex problems still need help
- Next: Focus on strings and linked lists
```

---

## 🚀 ML Project Setup

### When to Start: Week 2-3

**Project 1: Iris Classification** (Easy)

**Steps**:
1. Download Iris dataset
2. Explore data (EDA)
3. Preprocess features
4. Train model (SVM, Random Forest)
5. Evaluate performance
6. Document results

**Create Structure**:
```bash
mkdir -p ml-projects/01-iris-classification
cd ml-projects/01-iris-classification
touch README.md notebook.ipynb requirements.txt
```

---

## 📖 Resources to Bookmark

### DSA Problems
- [LeetCode](https://leetcode.com) - Best for interview prep
- [GeeksforGeeks](https://geeksforgeeks.org) - Explanations
- [HackerRank](https://hackerrank.com) - Easy to medium

### ML Tutorials
- [Kaggle Learn](https://kaggle.com/learn) - Free courses
- [Fast.ai](https://fast.ai) - Practical deep learning
- [TensorFlow](https://tensorflow.org) - Official docs

### Blogs to Read
- [Medium ML](https://medium.com/tag/machine-learning)
- [Towards Data Science](https://towardsdatascience.com)
- [Analytics Vidhya](https://analyticsvidhya.com)

---

## ✅ Checklist for Success

### Week 1
- [ ] Repository cloned and set up locally
- [ ] Python environment configured
- [ ] First problem solved
- [ ] First commit pushed
- [ ] Progress tracker started
- [ ] GitHub showing activity

### Week 2
- [ ] 7+ problems solved
- [ ] Streak maintained (daily commits)
- [ ] Progress tracker updated
- [ ] One blog post drafted
- [ ] ML project idea chosen

### Week 3
- [ ] 15+ problems solved
- [ ] First ML project started
- [ ] Documentation improved
- [ ] Commits meaningful and consistent
- [ ] Sharing progress on LinkedIn

### Week 4
- [ ] 20+ problems solved
- [ ] First ML project completed
- [ ] README enhanced with stats
- [ ] 30+ commits on GitHub
- [ ] First blog post published

---

## 🆘 Common Issues & Solutions

### Git Push Fails
```bash
# Check current branch
git branch

# Make sure you're on the right branch
git checkout coding-and-ai-setup

# Try pushing again
git push origin coding-and-ai-setup
```

### Python Import Error
```bash
# Reinstall packages
pip install --upgrade pip
pip install jupyter numpy pandas scikit-learn

# Test import
python -c "import pandas; print('OK')"
```

### Lost Commits?
```bash
# Check git log
git log --oneline

# See all branches
git branch -a

# Recover lost branch
git reflog
```

---

## 💬 Need Help?

### Documentation
1. Check `docs/commit-guidelines.md` for commit format
2. Read `docs/project-template.md` for project structure
3. Review `CONTRIBUTING.md` for guidelines

### Stuck on Problem?
1. Try for 20 minutes yourself
2. Look at hints on LeetCode
3. Check solution in this repo
4. Understand the approach
5. Code from scratch

### Quick Tips
- Don't memorize solutions
- Understand patterns
- Practice similar problems
- Explain to someone else

---

## 🎯 Your 90-Day Journey Starts Here

**Day 1 Goals (Today)**:
- ✅ Read this guide
- ✅ Set up repository locally
- ✅ Solve first problem
- ✅ Make first commit
- ✅ Update progress tracker

**Ready?** Let's go! 🚀

```bash
# Clone, solve, commit, repeat
git clone https://github.com/chandusriii/22NH1A4203.git
cd 22NH1A4203
# ... solve problems ...
git push origin my-learning-journey
```

---

## 📞 Contact & Support

- **Questions?** Open an issue on GitHub
- **Stuck?** Check the docs/
- **Ready to share?** Update LinkedIn
- **Want feedback?** Create a PR

---

**Good luck! The journey of 1000 miles begins with a single commit. 💪**

---

*Last Updated: May 30, 2026*  
*Your Personal Coding Journey Starts Now!*