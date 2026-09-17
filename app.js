(function () {
  "use strict";

  var data = window.COURSE_DATA;
  var app = document.getElementById("app");
  var STORAGE_KEY = "computer-literacy-field-project-v1";
  var statuses = ["not-started", "in-progress", "completed"];
  var statusLabels = {
    "not-started": "Not started",
    "in-progress": "In progress",
    "completed": "Completed"
  };

  function blankProgress() {
    return {
      completedLessons: [],
      quizScores: {},
      quizAttempts: {},
      activities: {},
      finalChecklist: {},
      selfAssessment: {},
      lastLesson: data.lessons[0].id,
      updatedAt: new Date().toISOString()
    };
  }

  function loadProgress() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Object.assign(blankProgress(), saved || {});
    } catch (error) {
      return blankProgress();
    }
  }

  var progress = loadProgress();

  function saveProgress() {
    progress.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    updateNavState();
  }

  function resetProgress() {
    if (!confirm("Reset all saved progress on this browser?")) return;
    progress = blankProgress();
    saveProgress();
    render();
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function byId(id) {
    return data.lessons.find(function (lesson) {
      return lesson.id === id;
    });
  }

  function getRoute() {
    var hash = window.location.hash.replace(/^#/, "") || "/";
    var parts = hash.split("/").filter(Boolean);
    return {
      path: hash,
      name: parts[0] || "",
      id: parts[1] || ""
    };
  }

  function setPage(html) {
    app.innerHTML = html;
    app.focus({ preventScroll: true });
    updateNavState();
  }

  function updateNavState() {
    var route = getRoute();
    var active = "/" + (route.name || "");
    document.querySelectorAll("[data-route]").forEach(function (link) {
      var linkRoute = link.getAttribute("data-route");
      link.toggleAttribute("aria-current", linkRoute === active || (active === "/" && linkRoute === "/"));
    });
  }

  function percent(value, total) {
    if (!total) return 0;
    return Math.round((value / total) * 100);
  }

  function courseStats() {
    var completedLessons = progress.completedLessons.length;
    var completedActivities = Object.values(progress.activities).filter(function (status) {
      return status === "completed";
    }).length;
    var quizIds = Object.keys(progress.quizScores);
    var quizAverage = quizIds.length
      ? Math.round(quizIds.reduce(function (sum, id) { return sum + progress.quizScores[id]; }, 0) / quizIds.length)
      : 0;
    var finalDone = Object.values(progress.finalChecklist).filter(Boolean).length;
    var lessonPct = percent(completedLessons, data.lessons.length);
    var activityPct = percent(completedActivities, data.activities.length);
    var finalPct = percent(finalDone, data.finalProject.checklist.length);
    var overall = Math.round((lessonPct + activityPct + finalPct + quizAverage) / 4);

    return {
      completedLessons: completedLessons,
      completedActivities: completedActivities,
      quizAverage: quizAverage,
      finalDone: finalDone,
      lessonPct: lessonPct,
      activityPct: activityPct,
      finalPct: finalPct,
      overall: overall
    };
  }

  function nextLesson() {
    return data.lessons.find(function (lesson) {
      return !progress.completedLessons.includes(lesson.id);
    }) || byId(progress.lastLesson) || data.lessons[0];
  }

  function progressBar(label, value) {
    return [
      '<div class="meter" role="group" aria-label="' + escapeHtml(label) + '">',
      '<div class="meter-row"><span>' + escapeHtml(label) + '</span><strong>' + value + '%</strong></div>',
      '<div class="meter-track"><span style="width:' + value + '%"></span></div>',
      '</div>'
    ].join("");
  }

  function renderHome() {
    var stats = courseStats();
    var next = nextLesson();
    setPage([
      '<section class="hero-band">',
      '<div class="hero-grid">',
      '<div>',
      '<p class="eyebrow">Field Project learning site</p>',
      '<h1>Computer Literacy</h1>',
      '<p class="lead">Learn computers. Practice real skills. Build something yourself.</p>',
      '<div class="hero-actions">',
      '<a class="button primary" href="#/lesson/' + next.id + '">Continue: ' + escapeHtml(next.shortTitle) + '</a>',
      '<a class="button ghost" href="#/practice">Practice activities</a>',
      '</div>',
      '</div>',
      '<div class="hero-panel" aria-label="Course progress summary">',
      '<h2>Your progress</h2>',
      progressBar("Overall", stats.overall),
      '<p>' + stats.completedLessons + ' / ' + data.lessons.length + ' lessons complete</p>',
      '<p>Quiz average: ' + stats.quizAverage + '%</p>',
      '</div>',
      '</div>',
      '</section>',
      '<section class="section">',
      '<div class="section-heading"><h2>Learn by lecture</h2><a href="#/learn">View all</a></div>',
      '<div class="card-grid lesson-grid">',
      data.lessons.slice(0, 4).map(lessonCard).join(""),
      '</div>',
      '</section>',
      '<section class="section split">',
      '<div>',
      '<h2>Quick practice</h2>',
      '<p>Activities are based on classroom tasks: documents, marksheets, slides, safe search, Canva designs, and Scratch blocks.</p>',
      '<a class="button secondary" href="#/practice">Open practice</a>',
      '</div>',
      '<div>',
      '<h2>Final project</h2>',
      '<p>Complete a Word document and Excel marksheet. The rubric is exactly 20 marks.</p>',
      '<a class="button secondary" href="#/final">Open final project</a>',
      '</div>',
      '</section>'
    ].join(""));
  }

  function lessonCard(lesson) {
    var complete = progress.completedLessons.includes(lesson.id);
    var score = progress.quizScores[lesson.id];
    return [
      '<article class="card lesson-card">',
      '<div class="card-top"><span class="pill">' + escapeHtml(lesson.lecture) + '</span><span class="status ' + (complete ? "done" : "") + '">' + (complete ? "Completed" : "Open") + '</span></div>',
      '<h3>' + escapeHtml(lesson.title) + '</h3>',
      '<p>' + escapeHtml(lesson.summary) + '</p>',
      '<div class="mini-meta">',
      '<span>' + lesson.objectives.length + ' goals</span>',
      '<span>' + (score === undefined ? "Quiz pending" : "Best quiz " + score + "%") + '</span>',
      '</div>',
      '<a class="button small" href="#/lesson/' + lesson.id + '">Start lesson</a>',
      '</article>'
    ].join("");
  }

  function renderLearn() {
    setPage([
      '<section class="page-head">',
      '<p class="eyebrow">Data-driven curriculum</p>',
      '<h1>Learn</h1>',
      '<p>Eight practical lessons from computer basics to Scratch, with village examples and classroom activities.</p>',
      '<label class="search-box">Search lessons and glossary<input id="searchInput" type="search" placeholder="Try CPU, Excel, SUM, AI, Scratch"></label>',
      '<div id="searchResults" class="search-results" aria-live="polite"></div>',
      '</section>',
      '<section class="section">',
      '<div class="card-grid lesson-grid">',
      data.lessons.map(lessonCard).join(""),
      '</div>',
      '</section>'
    ].join(""));

    var input = document.getElementById("searchInput");
    input.addEventListener("input", function () {
      renderSearchResults(input.value);
    });
  }

  function renderSearchResults(query) {
    var target = document.getElementById("searchResults");
    var q = query.trim().toLowerCase();
    if (!q) {
      target.innerHTML = "";
      return;
    }

    var lessonMatches = data.lessons.filter(function (lesson) {
      return JSON.stringify(lesson).toLowerCase().includes(q);
    }).slice(0, 6);
    var glossaryMatches = data.glossary.filter(function (item) {
      return (item[0] + " " + item[1]).toLowerCase().includes(q);
    }).slice(0, 6);

    target.innerHTML = [
      '<div class="result-panel">',
      '<h2>Search results</h2>',
      lessonMatches.length || glossaryMatches.length ? "" : '<p>No matching lesson found.</p>',
      lessonMatches.map(function (lesson) {
        return '<a class="result-row" href="#/lesson/' + lesson.id + '"><strong>' + escapeHtml(lesson.title) + '</strong><span>' + escapeHtml(lesson.summary) + '</span></a>';
      }).join(""),
      glossaryMatches.map(function (item) {
        return '<div class="result-row"><strong>' + escapeHtml(item[0]) + '</strong><span>' + escapeHtml(item[1]) + '</span></div>';
      }).join(""),
      '</div>'
    ].join("");
  }

  function renderLesson(id) {
    var lesson = byId(id) || data.lessons[0];
    progress.lastLesson = lesson.id;
    saveProgress();
    var activities = data.activities.filter(function (activity) {
      return activity.lessonId === lesson.id;
    });
    var isComplete = progress.completedLessons.includes(lesson.id);
    
    // Store current slide index globally for simple slideshow logic
    window.currentSlideIndex = window.currentSlideIndex || 0;
    if (window.currentLessonId !== lesson.id) {
        window.currentSlideIndex = 0;
        window.currentLessonId = lesson.id;
    }

    setPage([
      '<article class="lesson-page">',
      '<div class="lesson-hero">',
      '<a class="back-link" href="#/learn">Back to Learn</a>',
      '<p class="eyebrow">' + escapeHtml(lesson.lecture) + '</p>',
      '<h1>' + escapeHtml(lesson.title) + '</h1>',
      '<p class="lead">' + escapeHtml(lesson.summary) + '</p>',
      '<button class="button ' + (isComplete ? "secondary" : "primary") + '" data-action="toggle-lesson" data-id="' + lesson.id + '">' + (isComplete ? "Mark as not complete" : "Mark lesson complete") + '</button>',
      '</div>',
      
      '<div class="lesson-flow-nav">',
      '<a href="#section-learn">Learn</a>',
      '<a href="#section-explore">Explore</a>',
      '<a href="#section-practice">Practice</a>',
      '<a href="#section-quiz">Quiz</a>',
      '<a href="#section-revise">Revise</a>',
      '</div>',
      
      '<section class="content-band analogy"><h2>Village example</h2><p>' + escapeHtml(lesson.villageExample) + '</p></section>',
      
      '<section class="content-grid">',
      '<div class="content-main">',
      
      // LEARN SECTION
      '<div id="section-learn" class="flow-section">',
      '<div class="section-heading"><h2>Learn</h2><span>Detailed Notes</span></div>',
      panel("Introduction", '<p>' + escapeHtml(lesson.introduction || "") + '</p>'),
      panel("Learning goals", list(lesson.objectives)),
      panel("Detailed Explanation", (lesson.detailedExplanation || []).map(function(p){ return '<p>' + escapeHtml(p) + '</p>'; }).join("")),
      panel("Key ideas", '<div class="concept-grid">' + lesson.concepts.map(conceptCard).join("") + '</div>'),
      panel("Practical Examples", list(lesson.practicalExamples || [])),
      panel("Common Mistakes", list(lesson.commonMistakes || [])),
      panel(lesson.stepsTitle, orderedList(lesson.steps)),
      '</div>',
      
      // EXPLORE SECTION
      '<div id="section-explore" class="flow-section">',
      '<div class="section-heading"><h2>Explore</h2><span>Classroom Slides</span></div>',
      renderSlideshow(lesson),
      '</div>',
      
      // PRACTICE SECTION
      '<div id="section-practice" class="flow-section">',
      '<div class="section-heading"><h2>Practice</h2><span>Try it yourself</span></div>',
      panel("Activities", activities.map(activityCard).join("")),
      flowPanel(lesson.visual),
      '</div>',
      
      // QUIZ SECTION
      '<div id="section-quiz" class="flow-section">',
      '<div class="section-heading"><h2>Quiz</h2><span>Check your understanding</span></div>',
      quizPanel(lesson),
      '</div>',
      
      // REVISE SECTION
      '<div id="section-revise" class="flow-section">',
      '<div class="section-heading"><h2>Revise</h2><span>Summary & Review</span></div>',
      panel("Quick Revision", list(lesson.quickRevision || [])),
      panel("Practice Questions (Think about these)", list(lesson.practiceQuestions || [])),
      panel("Did You Know?", '<p><strong>💡 </strong> ' + escapeHtml(lesson.didYouKnow || "") + '</p>'),
      '</div>',
      
      '</div>', // end content-main
      
      '<aside class="side-panel">',
      '<h2>Lesson progress</h2>',
      '<p>Status: <strong>' + (isComplete ? "Completed" : "In progress") + '</strong></p>',
      '<p>Best quiz: <strong>' + (progress.quizScores[lesson.id] === undefined ? "Not attempted" : progress.quizScores[lesson.id] + "%") + '</strong></p>',
      '<a class="button small full" href="#/practice">All practice</a>',
      '<a class="button small full ghost" href="#/progress">Progress</a>',
      '</aside>',
      '</section>',
      '</article>'
    ].join(""));
  }
  
  function renderSlideshow(lesson) {
    if (!lesson.slides || lesson.slides.length === 0) return '<p>No slides available.</p>';
    var idx = window.currentSlideIndex || 0;
    var slide = lesson.slides[idx];
    return [
      '<div class="slide-viewer" id="slideViewer">',
      '<div class="slide-header">',
      '<span class="slide-counter">Slide ' + (idx + 1) + ' of ' + lesson.slides.length + '</span>',
      '<button class="button small ghost" data-action="toggle-fullscreen">Full Screen</button>',
      '</div>',
      '<div class="slide-content">',
      '<h3 class="slide-title">' + escapeHtml(slide.title) + '</h3>',
      '<ul class="slide-points">',
      slide.points.map(function(p){ return '<li>' + escapeHtml(p) + '</li>'; }).join(""),
      '</ul>',
      '</div>',
      '<div class="slide-controls">',
      '<button class="button" data-action="prev-slide" ' + (idx === 0 ? "disabled" : "") + '>Previous</button>',
      '<button class="button" data-action="next-slide" ' + (idx === lesson.slides.length - 1 ? "disabled" : "") + '>Next</button>',
      '</div>',
      '</div>'
    ].join("");
  }

  function panel(title, body) {
    return '<section class="panel"><h2>' + escapeHtml(title) + '</h2>' + body + '</section>';
  }

  function list(items) {
    return '<ul class="clean-list">' + items.map(function (item) {
      return '<li>' + escapeHtml(item) + '</li>';
    }).join("") + '</ul>';
  }

  function orderedList(items) {
    return '<ol class="step-list">' + items.map(function (item) {
      return '<li>' + escapeHtml(item) + '</li>';
    }).join("") + '</ol>';
  }

  function conceptCard(concept) {
    return '<div class="concept-card"><h3>' + escapeHtml(concept.term) + '</h3><p>' + escapeHtml(concept.detail) + '</p></div>';
  }

  function flowPanel(visual) {
    return panel(visual.title, '<div class="flow">' + visual.items.map(function (item) {
      return '<span>' + escapeHtml(item) + '</span>';
    }).join("") + '</div>');
  }

  function activityCard(activity) {
    var status = progress.activities[activity.id] || "not-started";
    return [
      '<article class="activity-card">',
      '<div><span class="pill">' + escapeHtml(activity.type) + '</span><h3>' + escapeHtml(activity.title) + '</h3></div>',
      '<p>' + escapeHtml(activity.task) + '</p>',
      '<p class="outcome">' + escapeHtml(activity.outcome) + '</p>',
      '<label>Status<select data-action="activity-status" data-id="' + activity.id + '">',
      statuses.map(function (option) {
        return '<option value="' + option + '"' + (option === status ? " selected" : "") + '>' + statusLabels[option] + '</option>';
      }).join(""),
      '</select></label>',
      '</article>'
    ].join("");
  }

  function quizPanel(lesson) {
    return [
      '<section class="quiz-panel" data-quiz="' + lesson.id + '">',
      lesson.quiz.map(function (question, index) {
        return [
          '<fieldset class="quiz-question">',
          '<legend>' + (index + 1) + '. ' + escapeHtml(question.question) + '</legend>',
          question.options.map(function (option, optionIndex) {
            var name = 'q-' + lesson.id + '-' + index;
            return '<label><input type="radio" name="' + name + '" value="' + optionIndex + '"> <span>' + escapeHtml(option) + '</span></label>';
          }).join(""),
          '<p class="quiz-feedback" data-feedback="' + index + '"></p>',
          '</fieldset>'
        ].join("");
      }).join(""),
      '<div class="quiz-actions">',
      '<button class="button primary" data-action="check-quiz" data-id="' + lesson.id + '">Check answers</button>',
      '<button class="button ghost" data-action="retry-quiz" data-id="' + lesson.id + '">Retry</button>',
      '<span id="quizScore-' + lesson.id + '" class="quiz-score">' + (progress.quizScores[lesson.id] === undefined ? "" : "Best score: " + progress.quizScores[lesson.id] + "%") + '</span>',
      '</div>',
      '<div id="quizRevisionSuggestion-' + lesson.id + '" class="quiz-revision-suggestion"></div>',
      '</section>'
    ].join("");
  }

  function renderPractice() {
    var grouped = data.lessons.map(function (lesson) {
      var activities = data.activities.filter(function (activity) {
        return activity.lessonId === lesson.id;
      });
      return '<section class="panel"><div class="section-heading"><h2>' + escapeHtml(lesson.shortTitle) + '</h2><a href="#/lesson/' + lesson.id + '">Lesson</a></div>' + activities.map(activityCard).join("") + '</section>';
    }).join("");

    setPage([
      '<section class="page-head">',
      '<p class="eyebrow">Classroom work</p>',
      '<h1>Practice</h1>',
      '<p>Track practical activities as not started, in progress, or completed. Progress is saved only in this browser.</p>',
      '</section>',
      '<section class="content-main wide">',
      grouped,
      '</section>'
    ].join(""));
  }

  function renderProgress() {
    var stats = courseStats();
    setPage([
      '<section class="page-head">',
      '<p class="eyebrow">Saved locally</p>',
      '<h1>Your Progress</h1>',
      '<p>This progress is saved on this device and browser. No login is used.</p>',
      '</section>',
      '<section class="progress-layout">',
      '<div class="panel">',
      progressBar("Overall", stats.overall),
      progressBar("Lessons", stats.lessonPct),
      progressBar("Activities", stats.activityPct),
      progressBar("Final checklist", stats.finalPct),
      '<dl class="stats-list">',
      '<div><dt>Lessons</dt><dd>' + stats.completedLessons + ' / ' + data.lessons.length + '</dd></div>',
      '<div><dt>Activities</dt><dd>' + stats.completedActivities + ' / ' + data.activities.length + '</dd></div>',
      '<div><dt>Quiz average</dt><dd>' + stats.quizAverage + '%</dd></div>',
      '<div><dt>Final checklist</dt><dd>' + stats.finalDone + ' / ' + data.finalProject.checklist.length + '</dd></div>',
      '</dl>',
      '<div class="hero-actions"><a class="button primary" href="#/lesson/' + nextLesson().id + '">Continue Learning</a><button class="button danger" data-action="reset">Reset Progress</button></div>',
      '</div>',
      '<div class="panel">',
      '<h2>Student self-assessment</h2>',
      data.selfAssessment.map(function (item, index) {
        var checked = progress.selfAssessment[index] ? " checked" : "";
        return '<label class="check-row"><input type="checkbox" data-action="self-check" data-id="' + index + '"' + checked + '> <span>' + escapeHtml(item) + '</span></label>';
      }).join(""),
      '</div>',
      '</section>'
    ].join(""));
  }

  function renderFinal() {
    var project = data.finalProject;
    var done = Object.values(progress.finalChecklist).filter(Boolean).length;
    setPage([
      '<section class="page-head">',
      '<p class="eyebrow">20 marks</p>',
      '<h1>' + escapeHtml(project.title) + '</h1>',
      '<p>' + escapeHtml(project.intro) + '</p>',
      progressBar("Checklist", percent(done, project.checklist.length)),
      '</section>',
      '<section class="content-grid">',
      '<div class="content-main">',
      project.parts.map(function (part) {
        return panel(part.title, '<p><strong>' + escapeHtml(part.topic) + '</strong></p>' + list(part.requirements));
      }).join(""),
      '<section class="panel"><h2>Assessment rubric</h2>' + rubricTable(project.rubric) + '</section>',
      '</div>',
      '<aside class="side-panel">',
      '<h2>Project checklist</h2>',
      project.checklist.map(function (item, index) {
        var checked = progress.finalChecklist[index] ? " checked" : "";
        return '<label class="check-row"><input type="checkbox" data-action="final-check" data-id="' + index + '"' + checked + '> <span>' + escapeHtml(item) + '</span></label>';
      }).join(""),
      '</aside>',
      '</section>'
    ].join(""));
  }

  function rubricTable(rubric) {
    return [
      '<div class="table-wrap"><table>',
      '<thead><tr><th>Area</th><th>Marks</th><th>Evidence</th></tr></thead>',
      '<tbody>',
      rubric.map(function (row) {
        return '<tr><td>' + escapeHtml(row.area) + '</td><td>' + row.marks + '</td><td>' + escapeHtml(row.evidence) + '</td></tr>';
      }).join(""),
      '<tr class="total-row"><td>Total</td><td>20</td><td>Final project score</td></tr>',
      '</tbody></table></div>'
    ].join("");
  }

  function renderAbout() {
    setPage([
      '<section class="page-head">',
      '<p class="eyebrow">Project info</p>',
      '<h1>About this site</h1>',
      '<p>This is a lightweight Computer Literacy Field Project website for Class 6 and 7 students. It has no login, no registration, and no backend.</p>',
      '</section>',
      '<section class="content-main wide">',
      panel("What it includes", list([
        "Home, Learn, Practice, Progress, Final Project, and About sections",
        "Eight lessons built as structured learning modules",
        "Village examples, practical activities, and safety rules",
        "Auto-scored quizzes with best score saved locally",
        "Activity tracking, self-assessment, final project checklist, and reset progress",
        "Offline-friendly static content"
      ])),
      panel("Source basis", list(data.sourceSummary.concat([
        "No college, school, or team name has been invented."
      ]))),
      panel("Local storage note", '<p>Progress is stored in the browser localStorage on this device. Clearing browser data or using another device will not carry the same progress.</p>'),
      '</section>'
    ].join(""));
  }

  function checkQuiz(lessonId) {
    var lesson = byId(lessonId);
    if (!lesson) return;
    var correct = 0;
    lesson.quiz.forEach(function (question, index) {
      var selected = document.querySelector('input[name="q-' + lessonId + '-' + index + '"]:checked');
      var feedback = document.querySelector('[data-feedback="' + index + '"]');
      var answer = selected ? Number(selected.value) : -1;
      var ok = answer === question.answer;
      if (ok) correct += 1;
      feedback.className = "quiz-feedback " + (ok ? "correct" : "incorrect");
      var statusIcon = ok ? "✅ " : "❌ ";
      feedback.innerHTML = '<strong>' + statusIcon + (ok ? "Correct!" : "Incorrect.") + '</strong> ' + escapeHtml(question.explanation);
    });
    var score = Math.round((correct / lesson.quiz.length) * 100);
    var previous = progress.quizScores[lessonId];
    progress.quizScores[lessonId] = previous === undefined ? score : Math.max(previous, score);
    progress.quizAttempts[lessonId] = (progress.quizAttempts[lessonId] || 0) + 1;
    saveProgress();
    var scoreNode = document.getElementById("quizScore-" + lessonId);
    if (scoreNode) scoreNode.textContent = "Score: " + score + "% | Best: " + progress.quizScores[lessonId] + "%";
    
    var suggestionNode = document.getElementById("quizRevisionSuggestion-" + lessonId);
    if (suggestionNode) {
        if (score === 100) {
            suggestionNode.innerHTML = "<p class='success-msg'>Excellent job! You have mastered this topic.</p>";
        } else if (score >= 60) {
            suggestionNode.innerHTML = "<p class='warning-msg'>Good effort. Review the incorrect answers and try the practice questions in the Revise section.</p>";
        } else {
            suggestionNode.innerHTML = "<p class='error-msg'>Keep trying! Please go back to the <strong>Learn</strong> and <strong>Explore</strong> sections to revise before attempting the quiz again.</p>";
        }
    }
  }

  function retryQuiz(lessonId) {
    document.querySelectorAll('[data-quiz="' + lessonId + '"] input[type="radio"]').forEach(function (input) {
      input.checked = false;
    });
    document.querySelectorAll('[data-quiz="' + lessonId + '"] .quiz-feedback').forEach(function (node) {
      node.textContent = "";
      node.className = "quiz-feedback";
    });
  }

  function toggleLesson(id) {
    var index = progress.completedLessons.indexOf(id);
    if (index >= 0) {
      progress.completedLessons.splice(index, 1);
    } else {
      progress.completedLessons.push(id);
    }
    saveProgress();
    renderLesson(id);
  }

  function handleAction(event) {
    var target = event.target.closest("[data-action]");
    if (!target) return;
    var action = target.getAttribute("data-action");
    var id = target.getAttribute("data-id");

    if (action === "toggle-lesson") toggleLesson(id);
    if (action === "check-quiz") checkQuiz(id);
    if (action === "retry-quiz") retryQuiz(id);
    if (action === "reset") resetProgress();
    if (action === "next-slide") {
        var l = byId(window.currentLessonId);
        if (l && window.currentSlideIndex < l.slides.length - 1) {
            window.currentSlideIndex++;
            renderLesson(window.currentLessonId);
            setTimeout(function() { document.getElementById("slideViewer").scrollIntoView(); }, 0);
        }
    }
    if (action === "prev-slide") {
        if (window.currentSlideIndex > 0) {
            window.currentSlideIndex--;
            renderLesson(window.currentLessonId);
            setTimeout(function() { document.getElementById("slideViewer").scrollIntoView(); }, 0);
        }
    }
    if (action === "toggle-fullscreen") {
        var viewer = document.getElementById("slideViewer");
        if (viewer) {
            if (!document.fullscreenElement) {
                viewer.requestFullscreen().catch(err => {
                    alert("Error attempting to enable fullscreen mode: " + err.message);
                });
            } else {
                document.exitFullscreen();
            }
        }
    }
  }

  function handleChange(event) {
    var target = event.target;
    var action = target.getAttribute("data-action");
    var id = target.getAttribute("data-id");
    if (!action) return;

    if (action === "activity-status") {
      progress.activities[id] = target.value;
      saveProgress();
    }
    if (action === "final-check") {
      progress.finalChecklist[id] = target.checked;
      saveProgress();
      renderFinal();
    }
    if (action === "self-check") {
      progress.selfAssessment[id] = target.checked;
      saveProgress();
    }
  }

  function render() {
    var route = getRoute();
    if (route.name === "learn") return renderLearn();
    if (route.name === "lesson") return renderLesson(route.id);
    if (route.name === "practice") return renderPractice();
    if (route.name === "progress") return renderProgress();
    if (route.name === "final") return renderFinal();
    if (route.name === "about") return renderAbout();
    return renderHome();
  }

  document.addEventListener("click", handleAction);
  document.addEventListener("change", handleChange);
  window.addEventListener("hashchange", render);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  render();
})();
