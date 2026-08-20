window.COURSE_DATA = {
  sourceSummary: [
    "Computer_Literacy_Handbook.pdf",
    "Teacher_Guide_Computer_Literacy_Lecture_5-9.pdf",
    "Referenced conversation source text for unavailable PDF attachments"
  ],
  lessons: [
    {
      id: "fundamentals",
      lecture: "Lecture 1",
      title: "Computer Fundamentals",
      shortTitle: "Fundamentals",
      summary: "Understand what a computer is, how input-process-output works, and how hardware and software work together.",
      villageExample: "A computer can feel like a notebook, calculator, radio, TV, and helper combined. It takes what we give, works on it, and shows a result.",
      objectives: [
        "Explain what a computer does in simple words",
        "Identify desktop, laptop, tablet, smartphone, and supercomputer",
        "Separate hardware from software",
        "Classify input and output devices",
        "Describe the input-process-output cycle",
        "Follow basic computer lab safety rules"
      ],
      concepts: [
        { term: "Computer", detail: "An electronic machine that stores information, solves problems, helps us write, draw, learn, communicate, and play educational games." },
        { term: "Input", detail: "Information or commands we give to the computer using a keyboard, mouse, microphone, camera, or touch screen." },
        { term: "Process", detail: "The computer works on the input, like calculating, saving, searching, or arranging information." },
        { term: "Output", detail: "The result we see or hear through a monitor, speaker, printer, or screen." },
        { term: "Hardware", detail: "Parts we can touch, such as monitor, CPU, keyboard, mouse, printer, and speakers." },
        { term: "Software", detail: "Programs that tell the computer what to do, such as Windows, Word, Paint, Chrome, Excel, or Scratch." }
      ],
      stepsTitle: "Know the main parts",
      steps: [
        "Monitor shows pictures, text, videos, and results.",
        "CPU controls the computer and is often called the brain of a desktop computer.",
        "Keyboard is used to type letters, numbers, and symbols.",
        "Mouse is used to point, click, select, drag, and scroll.",
        "Speakers give sound; printer prints work on paper.",
        "Keep food and water away, do not pull wires, and ask the teacher before changing settings."
      ],
      visual: {
        title: "Input -> Process -> Output",
        items: ["Type your name", "Computer reads it", "Name appears on screen"]
      },
      activities: ["identify-parts", "hardware-software", "input-output"],
      recap: [
        "A computer follows input-process-output.",
        "Hardware can be touched; software runs inside the computer.",
        "Safe use protects students and equipment."
      ],
      quiz: [
        {
          question: "Which part shows pictures and text?",
          options: ["Monitor", "Keyboard", "Mouse", "Printer"],
          answer: 0,
          explanation: "The monitor is the screen that shows output."
        },
        {
          question: "Typing your name on a keyboard is an example of what?",
          options: ["Input", "Output", "Printing", "Shutdown"],
          answer: 0,
          explanation: "The keyboard sends input to the computer."
        },
        {
          question: "Windows, Word, Paint, and Scratch are examples of software.",
          options: ["True", "False"],
          answer: 0,
          explanation: "Software means programs that tell the computer what to do."
        },
        {
          question: "What should you do if a wire is loose in the computer lab?",
          options: ["Pull it quickly", "Ignore it", "Ask the teacher", "Switch off every computer"],
          answer: 2,
          explanation: "Students should not touch wires. Ask the teacher or lab in-charge."
        }
      ],
      /* Enhanced study content for Lecture 1 (fundamentals) */
      estimatedTime: "15 min",
      difficulty: "Beginner",
      detailedNotes: [
        {
          title: "The IPO cycle",
          paragraphs: [
            "What it is: A simple model — Input → Process → Output — that describes how a computer works.",
            "Why it matters: Understanding IPO helps you predict how data moves through a computer and why results change when inputs change.",
            "How it works: Input devices (keyboard, mouse, mic) send data; the CPU and software process that data; output devices (monitor, speaker, printer) show the result."
          ],
          examples: ["Type a name (Input) → computer arranges letters (Process) → name appears on screen (Output)"]
        },
        {
          title: "Types of computers",
          paragraphs: [
            "Desktops stay on a table and need constant power — common in school labs.",
            "Laptops are portable and have batteries; tablets and smartphones use touch screens.",
            "Supercomputers are very large and used for tasks like weather prediction — you will not use these in class, but the idea shows scale and purpose."
          ]
        },
        {
          title: "Hardware vs Software",
          paragraphs: [
            "Hardware are the physical parts you can touch: monitor, keyboard, mouse, CPU cabinet, cables.",
            "Software are the programs inside the computer that tell it what to do: Windows, Word, Paint, Scratch, games.",
            "Important point: software needs hardware to run, and hardware needs software to be useful."
          ]
        },
        {
          title: "Common input and output devices",
          paragraphs: [
            "Input: keyboard, mouse, microphone — they let you tell the computer what to do.",
            "Output: monitor, printer, speakers — they show computer results.",
            "Tip: Practice naming devices in the lab so you can identify them quickly."
          ]
        },
        {
          title: "Basic lab safety",
          paragraphs: [
            "Always save your work before shutting down; never pull power plugs while the computer is on.",
            "Keep food and drinks away from keyboards and CPUs to avoid damage.",
            "If something looks wrong (smoke, loose wires), stop and tell the teacher immediately."
          ]
        }
      ],
      keyTakeaways: [
        "Computers follow the Input → Process → Output cycle.",
        "Hardware is physical; software is the instructions running on hardware.",
        "Common devices: monitor (output), keyboard (input), CPU (processing).",
        "Always follow lab safety and save work often."
      ],
      revision: [
        "IPO = Input → Process → Output",
        "Monitor shows output; keyboard gives input",
        "Hardware = touchable parts; software = programs"
      ],
      selfChecks: [
        "Explain the IPO cycle in one sentence.",
        "List three input devices and two output devices.",
        "Describe one safety rule to follow in the lab."
      ],
      enhancedQuiz: [
        { id: "f1-q1", type: "mcq", question: "Which device is mainly used to enter text into a computer?", options: ["Monitor", "Keyboard", "Printer", "Speaker"], answer: 1, explanation: "The keyboard is the primary input device for typing text.", difficulty: "easy", concept: "input" },
        { id: "f1-q2", type: "mcq", question: "Which of these is an output device?", options: ["Mouse", "Keyboard", "Monitor", "Microphone"], answer: 2, explanation: "Monitor displays pictures and text — it is an output device.", difficulty: "easy", concept: "output" },
        { id: "f1-q3", type: "mcq", question: "What does CPU stand for and what is its role?", options: ["Central Process Unit - stores files", "Central Processing Unit - does processing", "Computer Processing Unit - is a screen", "Central Power Unit - supplies electricity"], answer: 1, explanation: "CPU = Central Processing Unit; it performs processing (the computer's 'brain').", difficulty: "medium", concept: "process" },
        { id: "f1-q4", type: "mcq", question: "Which statement is true about software?", options: ["Software is something you can touch", "Software runs on hardware and gives instructions", "Software is always free", "Software is the same as a monitor"], answer: 1, explanation: "Software consists of programs that run on hardware and tell it what to do.", difficulty: "easy", concept: "software" },
        { id: "f1-q5", type: "mcq", question: "Which action should you take if you see a loose wire in the lab?", options: ["Pull it to fix the problem", "Ignore it", "Tell the teacher or lab in-charge", "Switch off all computers on your own"], answer: 2, explanation: "Students should inform the teacher; do not touch electrical wiring yourself.", difficulty: "medium", concept: "safety" },
        { id: "f1-q6", type: "mcq", question: "Choose the correct IPO order:", options: ["Process → Input → Output", "Input → Process → Output", "Output → Input → Process", "Input → Output → Process"], answer: 1, explanation: "The correct order is Input, then Processing, then Output.", difficulty: "easy", concept: "ipo" },
        { id: "f1-q7", type: "mcq", question: "Which is an example of portable computing?", options: ["Desktop", "Supercomputer", "Laptop", "Mainframe"], answer: 2, explanation: "Laptops are portable and have built-in batteries for use away from a fixed power point.", difficulty: "easy", concept: "types" },
        { id: "f1-q8", type: "mcq", question: "Why should you save your work frequently (Ctrl+S)?", options: ["It makes the computer faster", "It prevents loss of work if power is lost", "It copies the file to another computer", "It is needed to open the file"], answer: 1, explanation: "Saving locks the current work to disk so it is not lost during power outages or crashes.", difficulty: "medium", concept: "practice" }
      ]
    },
    {
      id: "windows-files",
      lecture: "Lecture 2",
      title: "Windows and File Management",
      shortTitle: "Files",
      summary: "Learn the desktop, files, folders, shortcuts, and how to save and organize work.",
      villageExample: "A folder is like a school bag. A file is like one notebook page kept inside the correct subject section.",
      objectives: [
        "Recognize desktop, icons, taskbar, Start menu, and windows",
        "Create, rename, copy, move, and delete files and folders carefully",
        "Save work in the correct location",
        "Use simple keyboard shortcuts",
        "Understand why organized files are easier to find"
      ],
      concepts: [
        { term: "Desktop", detail: "The first work area after the computer starts. It has icons, taskbar, and background." },
        { term: "Icon", detail: "A small picture used to open a program, file, or folder." },
        { term: "File", detail: "Saved work such as a document, picture, spreadsheet, or presentation." },
        { term: "Folder", detail: "A place used to keep related files together." },
        { term: "Copy", detail: "Make another copy of a file while keeping the original." },
        { term: "Move", detail: "Shift a file from one location to another." }
      ],
      stepsTitle: "Save and organize work",
      steps: [
        "Create a folder named Computer Practice.",
        "Open WordPad, Notepad, Paint, Word, or another available program.",
        "Complete the given work.",
        "Choose Save or Save As.",
        "Give a clear file name, such as My_First_Work.",
        "Open the folder again to check that the file was saved."
      ],
      visual: {
        title: "Organized files",
        items: ["Computer Practice folder", "My_First_Work document", "My Drawing picture", "Project file"]
      },
      activities: ["folder-practice", "copy-move-rename", "save-open-file"],
      recap: [
        "Files store work; folders organize files.",
        "Copy keeps the original; move changes location.",
        "Do not delete files unless you are sure."
      ],
      quiz: [
        {
          question: "Which action should you use when you need another copy of the same file?",
          options: ["Move", "Copy", "Delete", "Shutdown"],
          answer: 1,
          explanation: "Copy makes another copy while keeping the original file."
        },
        {
          question: "A folder is mainly used to:",
          options: ["Type letters", "Keep related files together", "Show videos", "Print pages"],
          answer: 1,
          explanation: "Folders help organize files so they are easy to find."
        },
        {
          question: "You should delete files only when you are sure they are not needed.",
          options: ["True", "False"],
          answer: 0,
          explanation: "Deleting the wrong file can remove important work."
        },
        {
          question: "Which filename is clearer for a saved class activity?",
          options: ["new1", "asdf", "My_Village_Document", "file"],
          answer: 2,
          explanation: "A meaningful file name helps students and teachers find work later."
        }
      ],
      /* Enhanced study content for Lecture 2 (Windows & File Management) */
      estimatedTime: "20 min",
      difficulty: "Beginner",
      detailedNotes: [
        {
          title: "Desktop and Windows",
          paragraphs: [
            "What it is: The desktop is the main workspace after you sign in. Windows are the movable boxes that show programs and files.",
            "Why it matters: Knowing how to move, resize, and switch windows helps you work faster and avoids accidental data loss."
          ],
          examples: ["Open two windows and switch between them to copy text from one document to another."]
        },
        {
          title: "Files and Folders",
          paragraphs: [
            "Files store individual pieces of work (documents, pictures). Folders hold related files so they are easier to find.",
            "Good practice: Use clear file names and place similar files in the same folder (for example: ComputerPractice/MathLesson1.docx)."
          ]
        },
        {
          title: "Save vs Save As",
          paragraphs: [
            "Save updates the same file. Save As creates a new file with a new name or location.",
            "Use Save As when you want to keep the original and make a changed copy."
          ]
        },
        {
          title: "Copy, Move, Rename, Delete",
          paragraphs: [
            "Copy creates another version in the chosen location; Move changes the file's location without leaving the original behind.",
            "Rename gives a file a clearer name; delete removes a file — only delete when sure."
          ],
          steps: [
            "Select file → Right-click → Copy → Paste in destination",
            "Select file → Drag to new folder (move) or Cut and Paste",
            "Right-click → Rename → Type new name",
            "Right-click → Delete → Check Recycle Bin before emptying"
          ]
        },
        {
          title: "Useful keyboard shortcuts",
          paragraphs: [
            "Ctrl+C = Copy, Ctrl+V = Paste, Ctrl+X = Cut, Ctrl+S = Save, Ctrl+Z = Undo, Alt+Tab = Switch windows.",
            "Practice these to speed up routine tasks."
          ]
        }
      ],
      keyTakeaways: [
        "Folders keep related files together; clear file names save time.",
        "Copy keeps the original; move changes the file's location.",
        "Use Save As to create a copy with a new name or place."
      ],
      revision: [
        "Copy = make a second file; Move = change file location",
        "Save updates the same file; Save As creates a new file",
        "Use clear file names like My_First_Work.docx"
      ],
      selfChecks: [
        "Explain the difference between Copy and Move.",
        "When should you use Save As instead of Save?",
        "List three keyboard shortcuts that save time."
      ],
      enhancedQuiz: [
        { id: "w2-q1", type: "mcq", question: "Which command creates another file while keeping the original in the same place?", options: ["Move", "Delete", "Copy", "Rename"], answer: 2, explanation: "Copy creates a second file and keeps the original.", difficulty: "easy", concept: "file-management" },
        { id: "w2-q2", type: "mcq", question: "When should you use Save As?", options: ["To overwrite the existing file", "To create a new file with a different name or location", "To delete a file", "To print the file"], answer: 1, explanation: "Save As creates a new file instead of overwriting the original.", difficulty: "medium", concept: "save" },
        { id: "w2-q3", type: "mcq", question: "Which keyboard shortcut copies selected items?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+S", "Alt+F4"], answer: 1, explanation: "Ctrl+C copies the selected item to the clipboard.", difficulty: "easy", concept: "shortcuts" },
        { id: "w2-q4", type: "mcq", question: "Which filename is best for saving a school assignment?", options: ["doc1", "My_First_Work_Math", "asdf", "image"], answer: 1, explanation: "A clear descriptive name helps teachers and students find the file later.", difficulty: "easy", concept: "naming" },
        { id: "w2-q5", type: "mcq", question: "What does Alt+Tab do?", options: ["Closes the current window", "Switches between open windows", "Opens the Start menu", "Saves the file"], answer: 1, explanation: "Alt+Tab switches quickly between open windows.", difficulty: "medium", concept: "windows" },
        { id: "w2-q6", type: "mcq", question: "If you accidentally delete a file, where can you first look to recover it?", options: ["Recycle Bin", "C:\\ drive root", "Internet", "Printer tray"], answer: 0, explanation: "The Recycle Bin holds deleted files until it is emptied.", difficulty: "easy", concept: "safety" },
        { id: "w2-q7", type: "mcq", question: "Which action moves a file to a different folder without leaving a copy behind?", options: ["Copy", "Move", "Rename", "Open"], answer: 1, explanation: "Move transfers the file to a new location; no duplicate remains in the original place.", difficulty: "easy", concept: "file-management" },
        { id: "w2-q8", type: "mcq", question: "Why is organizing files in folders important?", options: ["It makes the computer faster", "It helps find work quickly", "It deletes old files automatically", "It changes file content"], answer: 1, explanation: "Organized folders make it faster to locate and manage files.", difficulty: "medium", concept: "organization" }
      ]
    },
    {
      id: "word",
      lecture: "Lecture 3",
      title: "Microsoft Word",
      shortTitle: "Word",
      summary: "Create and format a clear one-page document using typing, formatting, lists, tables, pictures, and page tools.",
      villageExample: "A Word document is like a neat notebook page, but you can correct, decorate, save, and print it without rewriting the whole page.",
      objectives: [
        "Open Word and type clean paragraphs",
        "Correct text using Backspace and selection",
        "Use bold, italic, underline, font size, font colour, and alignment",
        "Create bulleted and numbered lists",
        "Insert a small table and picture",
        "Use header, footer, page number, margins, and line spacing",
        "Save and print when needed"
      ],
      concepts: [
        { term: "Bold", detail: "Makes important text dark and strong." },
        { term: "Italic", detail: "Slants text, often used for emphasis." },
        { term: "Underline", detail: "Draws a line below text." },
        { term: "Alignment", detail: "Places text left, center, right, or evenly across the page." },
        { term: "Table", detail: "Arranges information in rows and columns." },
        { term: "Margins", detail: "Blank space around the edges of a page." }
      ],
      stepsTitle: "Create 'My Favourite Season'",
      steps: [
        "Open Microsoft Word or an available word processor.",
        "Type the title: My Favourite Season.",
        "Center-align the title and make it bold with a larger font size.",
        "Write a short paragraph in readable font size.",
        "Add a three-point list.",
        "Add a 2-column and 2-row table.",
        "Save the file with the required name."
      ],
      visual: {
        title: "Document structure",
        items: ["Title", "Paragraph", "3-point list", "2 x 2 table", "Saved file"]
      },
      activities: ["word-season", "word-format-title", "word-table-list"],
      recap: [
        "Formatting should make text clearer, not confusing.",
        "Lists are useful for points; tables are useful for rows and columns.",
        "Save before closing."
      ],
      quiz: [
        {
          question: "Which tool makes text darker and stronger?",
          options: ["Italic", "Bold", "Underline", "Margins"],
          answer: 1,
          explanation: "Bold is used to make important text stand out."
        },
        {
          question: "A 2-column, 2-row table has how many cells?",
          options: ["2", "3", "4", "6"],
          answer: 2,
          explanation: "2 columns multiplied by 2 rows gives 4 cells."
        },
        {
          question: "A title is usually easier to read when it is centered and larger than the body text.",
          options: ["True", "False"],
          answer: 0,
          explanation: "A clear title helps the reader understand the document quickly."
        },
        {
          question: "Which feature is best for a three-point list?",
          options: ["Bullets or numbering", "Page number", "Printer", "Scroll bar"],
          answer: 0,
          explanation: "Bullets and numbered lists are made for short points."
        }
      ],
      /* Enhanced study content for Lecture 3 (Microsoft Word) */
      estimatedTime: "25 min",
      difficulty: "Beginner",
      detailedNotes: [
        {
          title: "Typing and correcting text",
          paragraphs: [
            "What it is: Entering text and using Backspace, Delete, and selection to correct mistakes.",
            "Why it matters: Efficient correction keeps writing clean and reduces rewriting time.",
            "How to practice: Type a short paragraph, then use selection + Delete or Backspace to edit; practice Ctrl+Z to undo mistakes."
          ]
        },
        {
          title: "Basic formatting",
          paragraphs: [
            "Bold, italic, and underline help make parts of your text stand out — use them sparingly for clarity.",
            "Font size, font colour, and alignment change how readable and formal the document appears.",
            "Important: Formatting should improve clarity, not distract the reader."
          ]
        },
        {
          title: "Lists and tables",
          paragraphs: [
            "Use bulleted or numbered lists for short points. Tables are for structured information in rows and columns.",
            "Example: A 2x2 table can present pairs of related information such as Item and Quantity."
          ]
        },
        {
          title: "Page setup and saving",
          paragraphs: [
            "Headers, footers, page numbers, margins, and line spacing control how the document looks when printed.",
            "Always save with a clear file name before printing or closing (use Ctrl+S frequently)."
          ]
        },
        {
          title: "Common mistakes",
          paragraphs: [
            "Over-formatting: too many fonts, colours, and sizes can confuse the reader.",
            "Not saving often: unsaved work can be lost during crashes or power loss."
          ]
        }
      ],
      keyTakeaways: [
        "Formatting improves clarity — use bold/italic/underline sparingly.",
        "Lists are for points; tables are for structured rows and columns.",
        "Save before closing and learn simple page setup options."
      ],
      revision: [
        "Bold makes text stronger; Italic slants text; Underline draws a line below text.",
        "A 2x2 table has 4 cells.",
        "Center the title and use larger font size for headings."
      ],
      selfChecks: [
        "Describe one reason to use bold text.",
        "How many cells are in a 2-column by 3-row table?",
        "What shortcut saves your work quickly?"
      ],
      enhancedQuiz: [
        { id: "wd-q1", type: "mcq", question: "Which formatting makes text thicker and more noticeable?", options: ["Underline", "Italic", "Bold", "Margin change"], answer: 2, explanation: "Bold makes text thicker and more noticeable.", difficulty: "easy", concept: "formatting" },
        { id: "wd-q2", type: "mcq", question: "How many cells are in a 2-column, 2-row table?", options: ["2", "3", "4", "1"], answer: 2, explanation: "2 columns × 2 rows = 4 cells.", difficulty: "easy", concept: "tables" },
        { id: "wd-q3", type: "mcq", question: "Which shortcut saves a document quickly?", options: ["Ctrl+P", "Ctrl+S", "Ctrl+Z", "Ctrl+X"], answer: 1, explanation: "Ctrl+S saves the current document.", difficulty: "easy", concept: "saving" },
        { id: "wd-q4", type: "mcq", question: "When should you use a table instead of a list?", options: ["For one sentence", "For structured rows and columns of related data", "For a poem", "To change page margins"], answer: 1, explanation: "Tables present structured information in rows and columns.", difficulty: "medium", concept: "tables" },
        { id: "wd-q5", type: "mcq", question: "Which alignment centres text on the page?", options: ["Left", "Right", "Centre", "Justify"], answer: 2, explanation: "Centre alignment places text in the middle of the line.", difficulty: "easy", concept: "alignment" },
        { id: "wd-q6", type: "mcq", question: "What is a common mistake when formatting documents?", options: ["Using consistent headings", "Saving often", "Using many different fonts and colours", "Using lists for points"], answer: 2, explanation: "Using many fonts and colours can make a document hard to read.", difficulty: "medium", concept: "best-practice" },
        { id: "wd-q7", type: "mcq", question: "Which feature helps you place page numbers and small text at the top or bottom?", options: ["Header and Footer", "Table", "Bold", "Margins"], answer: 0, explanation: "Headers and footers hold page numbers and small repeated text.", difficulty: "medium", concept: "page-setup" },
        { id: "wd-q8", type: "mcq", question: "Why should the title often be larger and centred?", options: ["To use more ink", "To make the document look formal and clear", "To make the file size bigger", "To prevent saving"], answer: 1, explanation: "A centered, larger title helps the reader see the main subject quickly.", difficulty: "medium", concept: "presentation" }
      ]
    },
    {
      id: "excel",
      lecture: "Lecture 4",
      title: "Microsoft Excel",
      shortTitle: "Excel",
      summary: "Use spreadsheets, cells, formulas, formatting, sorting, charts, and marksheets.",
      villageExample: "A spreadsheet is like a math grid notebook. Each box has an address, so formulas can find the correct numbers.",
      objectives: [
        "Identify rows, columns, cells, and cell addresses",
        "Enter names and numeric marks",
        "Use formulas such as SUM, AVERAGE, MAX, and MIN",
        "Understand formula results instead of manually typing totals",
        "Format and sort data",
        "Create a simple chart from marksheet data"
      ],
      concepts: [
        { term: "Row", detail: "A horizontal line of cells, numbered 1, 2, 3, and so on." },
        { term: "Column", detail: "A vertical line of cells, named A, B, C, and so on." },
        { term: "Cell", detail: "One box in a spreadsheet." },
        { term: "Cell address", detail: "The column letter and row number, such as B2." },
        { term: "Formula", detail: "An instruction that calculates a result, usually beginning with =." },
        { term: "Chart", detail: "A picture of data that makes comparison easier." }
      ],
      stepsTitle: "Build a marksheet",
      steps: [
        "Create headers: Name, Subject 1, Subject 2, Total.",
        "Enter at least five student names and numeric marks.",
        "Use =SUM(B2:C2) or the correct range for each total.",
        "Add one more formula: AVERAGE, MAX, or MIN.",
        "Format headers clearly.",
        "Create a simple column chart.",
        "Save the file using the required name."
      ],
      visual: {
        title: "Formula thinking",
        items: ["B2 = 20", "B3 = 30", "=SUM(B2:B3)", "Answer = 50"]
      },
      activities: ["excel-marksheet", "excel-formula-check", "excel-chart"],
      recap: [
        "A formula updates when numbers change.",
        "SUM adds numbers; AVERAGE finds the mean; MAX and MIN find highest and lowest.",
        "Charts help compare marks quickly."
      ],
      quiz: [
        {
          question: "If B2 has 20 and B3 has 30, what does =SUM(B2:B3) give?",
          options: ["20", "30", "50", "60"],
          answer: 2,
          explanation: "SUM adds 20 and 30, so the result is 50."
        },
        {
          question: "Which cell address is in column C and row 5?",
          options: ["5C", "C5", "Column5", "RowC"],
          answer: 1,
          explanation: "Cell addresses use column letter first, then row number."
        },
        {
          question: "Typing a total by hand is the same as using a formula.",
          options: ["True", "False"],
          answer: 1,
          explanation: "A formula recalculates when data changes; manually typed totals do not."
        },
        {
          question: "Which chart is suitable for comparing student totals?",
          options: ["Column chart", "Search engine", "Header", "Footer"],
          answer: 0,
          explanation: "A column chart can compare marks visually."
        }
      ]
    },
    {
      id: "powerpoint",
      lecture: "Lecture 5",
      title: "Microsoft PowerPoint",
      shortTitle: "PowerPoint",
      summary: "Create slides, use layouts and themes, insert visuals, save, reorder, and present confidently.",
      villageExample: "A slide is like one picture card in a wall story chart. A slideshow is like flipping through the cards while a student explains them.",
      objectives: [
        "Explain what PowerPoint is used for",
        "Identify slide pane, slide thumbnails, placeholder, and ribbon",
        "Use themes like a consistent school uniform",
        "Choose layouts such as Title Slide, Title and Content, Two Content, and Blank",
        "Insert pictures, icons, shapes, and text boxes",
        "Use transitions and animations carefully",
        "Save, reorder, duplicate, and delete slides",
        "Use speaker notes and present with confidence"
      ],
      concepts: [
        { term: "Slide", detail: "One page or card in a presentation." },
        { term: "Slide thumbnail", detail: "A small preview used to choose or reorder slides." },
        { term: "Placeholder", detail: "A box where text, pictures, or other content can be added." },
        { term: "Theme", detail: "A matching set of colors and styles, like a school uniform for all slides." },
        { term: "Transition", detail: "The effect used when moving from one slide to the next." },
        { term: "Animation", detail: "The movement effect for one item on a slide." }
      ],
      stepsTitle: "Create 'My School'",
      steps: [
        "Make a title slide with the presentation name.",
        "Add a slide about important places in the school.",
        "Add a slide with pictures, shapes, or icons.",
        "Add a final slide explaining how computers help students.",
        "Use one theme consistently.",
        "Keep text short and readable.",
        "Save and present the slides."
      ],
      visual: {
        title: "Wall story chart",
        items: ["Slide 1: Title", "Slide 2: Places", "Slide 3: Picture", "Slide 4: Explanation"]
      },
      activities: ["ppt-my-school", "ppt-layout-match", "ppt-present"],
      recap: [
        "Slides should support the speaker, not replace the speaker.",
        "Use simple text, clear pictures, and a consistent theme.",
        "Too many animations can distract the audience."
      ],
      quiz: [
        {
          question: "In the village analogy, one PowerPoint slide is like:",
          options: ["A picture card in a wall story chart", "A road", "A post office", "A calculator"],
          answer: 0,
          explanation: "Each slide is one card in the story chart."
        },
        {
          question: "A theme gives slides a consistent style, like:",
          options: ["A school uniform", "A password", "A keyboard key", "A file name"],
          answer: 0,
          explanation: "The source analogy compares themes with a school uniform."
        },
        {
          question: "Which is better for a class presentation?",
          options: ["Very long paragraphs", "Short points and clear visuals", "Tiny unreadable text", "Random animations on every word"],
          answer: 1,
          explanation: "Slides should be easy to read and explain."
        },
        {
          question: "Speaker notes can help the presenter remember what to say.",
          options: ["True", "False"],
          answer: 0,
          explanation: "Speaker notes support confident presenting."
        }
      ]
    },
    {
      id: "internet-email",
      lecture: "Lecture 6",
      title: "Internet, Email, and Google Drive",
      shortTitle: "Internet",
      summary: "Use browsers, search engines, Gmail, attachments, and Drive safely and responsibly.",
      villageExample: "The internet is like a road network connecting villages and cities. The browser is the bus, the search engine is the conductor, email is like a post office, and Google Drive is like a village grain godown for storing files.",
      objectives: [
        "Explain internet, website, URL, browser, and search engine",
        "Use short and clear search words",
        "Avoid unknown links, pop-ups, and prize offers",
        "Understand Gmail: Inbox, Compose, To, Subject, Attachment, Sent, Reply, CC, BCC, and Forward",
        "Upload and share files in Google Drive with permission",
        "Protect personal information online"
      ],
      concepts: [
        { term: "Internet", detail: "A large network connecting computers and phones around the world." },
        { term: "Browser", detail: "An app used to open websites, such as Chrome, Firefox, or Edge." },
        { term: "Search engine", detail: "A website that helps find information, such as Google, Bing, or DuckDuckGo." },
        { term: "URL", detail: "The address of a website." },
        { term: "Attachment", detail: "A file sent along with an email." },
        { term: "Google Drive", detail: "A place to store and share files online, like a grain godown for digital files." }
      ],
      stepsTitle: "Search safely",
      steps: [
        "Open a browser.",
        "Open a search engine.",
        "Type short, clear keywords, such as uses of computers in farming.",
        "Choose a reliable result instead of unknown pop-ups.",
        "Write useful points in your own words.",
        "Ask a teacher or parent before downloading anything."
      ],
      visual: {
        title: "Finding information",
        items: ["Browser bus", "Search conductor", "Website stop", "Useful information"]
      },
      activities: ["safe-search", "practice-email", "drive-upload"],
      recap: [
        "Never share personal information, passwords, address, phone number, or school details with strangers.",
        "Do not click unknown links or prize offers.",
        "Ask before emailing unknown people or sharing files."
      ],
      quiz: [
        {
          question: "In the source analogy, the browser is like a:",
          options: ["Bus", "Grain godown", "School uniform", "Tea recipe"],
          answer: 0,
          explanation: "The browser is compared to a bus that takes us to websites."
        },
        {
          question: "You receive a message from an unknown person with a prize link. What should you do?",
          options: ["Click it immediately", "Share it with friends", "Ask a teacher or parent and avoid clicking it", "Download the attachment"],
          answer: 2,
          explanation: "Unknown prize links and pop-ups are unsafe."
        },
        {
          question: "An email attachment is:",
          options: ["The subject line", "A file sent with the email", "The inbox", "The search button"],
          answer: 1,
          explanation: "Attachments are files added to an email."
        },
        {
          question: "Google Drive is used for storing and sharing files online.",
          options: ["True", "False"],
          answer: 0,
          explanation: "Drive stores files online, but sharing must be done carefully."
        }
      ]
    },
    {
      id: "canva-ai",
      lecture: "Lecture 7",
      title: "Canva and AI Tools",
      shortTitle: "Canva and AI",
      summary: "Design certificates or posters in Canva and use AI tools responsibly for learning.",
      villageExample: "Canva templates are like rangoli stencils: they give a neat starting pattern, but students still choose the message and details. AI is like a well-read elder who can help, but can still make mistakes.",
      objectives: [
        "Understand Canva templates, elements, text boxes, and download",
        "Design a simple certificate or poster",
        "Explain AI at a Class 6 and 7 level",
        "Use AI for learning without copying homework blindly",
        "Verify important facts",
        "Avoid entering personal information into AI tools",
        "Ask a teacher or parent before using a new AI website or app"
      ],
      concepts: [
        { term: "Template", detail: "A ready design starting point that can be edited." },
        { term: "Elements", detail: "Shapes, lines, icons, pictures, and design parts used in Canva." },
        { term: "Text box", detail: "A box where words can be typed in a design." },
        { term: "Download", detail: "Save the design as a file." },
        { term: "Artificial Intelligence", detail: "A computer system that can help answer, write, suggest, or explain, but it can be wrong." },
        { term: "Responsible AI", detail: "Using AI for help while checking facts, protecting privacy, and doing your own work." }
      ],
      stepsTitle: "Design a simple certificate",
      steps: [
        "Open Canva with teacher guidance.",
        "Choose a certificate or poster template.",
        "Change the title and name using text boxes.",
        "Add suitable elements without overcrowding the design.",
        "Check spelling and readability.",
        "Download or save the design as instructed.",
        "Do not upload personal photos or details without permission."
      ],
      visual: {
        title: "Responsible AI check",
        items: ["Ask a learning question", "Read the answer", "Check important facts", "Write in your own words"]
      },
      activities: ["canva-certificate", "ai-responsible-check", "poster-safe-computers"],
      recap: [
        "Templates help start design work quickly.",
        "AI can help explain, but students must think and verify.",
        "Never enter private information into unknown AI tools."
      ],
      quiz: [
        {
          question: "In the source analogy, Canva templates are like:",
          options: ["Rangoli stencils", "Road networks", "Post offices", "Keyboard keys"],
          answer: 0,
          explanation: "A template gives a neat starting pattern, like a rangoli stencil."
        },
        {
          question: "Which AI use is responsible?",
          options: ["Copy the full AI answer as homework", "Ask AI to explain a topic and then write in your own words", "Enter your phone number into an unknown AI site", "Believe every AI answer without checking"],
          answer: 1,
          explanation: "AI can support learning, but students should write their own work and verify facts."
        },
        {
          question: "AI can make mistakes.",
          options: ["True", "False"],
          answer: 0,
          explanation: "The source analogy says AI is like a well-read elder who can still make mistakes."
        },
        {
          question: "Before using a new AI website or app, students should:",
          options: ["Ask a teacher or parent", "Enter personal details", "Ignore all warnings", "Share passwords"],
          answer: 0,
          explanation: "New tools should be used with adult guidance."
        }
      ]
    },
    {
      id: "scratch",
      lecture: "Lecture 8",
      title: "Introduction to Coding and Scratch",
      shortTitle: "Scratch",
      summary: "Learn programming as exact instructions and explore Scratch stage, sprites, blocks, events, loops, motion, and conditions.",
      villageExample: "Programming is like an exact recipe for making tea: if a step is missing or in the wrong order, the result changes. Scratch logic can be understood through a daily watering routine: start, repeat, move, check condition, continue.",
      objectives: [
        "Explain programming as clear step-by-step instructions",
        "Identify Scratch stage, sprite, block palette, and script area",
        "Use events such as green flag clicked",
        "Use motion blocks to move sprites",
        "Understand repeat and forever loops",
        "Use simple conditions such as if on edge, bounce",
        "Read a small block-style script",
        "Understand the idea behind a Catch the Falling Fruit activity"
      ],
      concepts: [
        { term: "Program", detail: "A set of exact instructions given to a computer." },
        { term: "Scratch", detail: "A block-based programming tool for making simple animations, stories, and games." },
        { term: "Stage", detail: "The area where the Scratch project runs." },
        { term: "Sprite", detail: "A character or object that can move or act." },
        { term: "Event", detail: "Something that starts code, such as clicking the green flag." },
        { term: "Loop", detail: "A block that repeats instructions." },
        { term: "Condition", detail: "A check that decides what should happen next." }
      ],
      stepsTitle: "Read a Scratch script",
      steps: [
        "When green flag clicked.",
        "Repeat 10 times.",
        "Move 10 steps.",
        "If on edge, bounce.",
        "Change direction or continue moving.",
        "For Catch the Falling Fruit, use movement and conditions to catch objects."
      ],
      visual: {
        title: "Block flow",
        items: ["Green flag clicked", "Repeat 10", "Move 10 steps", "If on edge", "Bounce"]
      },
      activities: ["scratch-moving-sprite", "scratch-flow-order", "scratch-fruit"],
      recap: [
        "Computers need exact instructions.",
        "Events start scripts; loops repeat scripts; conditions check situations.",
        "Scratch blocks make coding easier to see."
      ],
      quiz: [
        {
          question: "Programming is compared with:",
          options: ["An exact recipe for making tea", "A post office", "A school uniform", "A grain godown"],
          answer: 0,
          explanation: "A recipe must be clear and in order, like a program."
        },
        {
          question: "Which Scratch part is the character or object?",
          options: ["Stage", "Sprite", "Ribbon", "URL"],
          answer: 1,
          explanation: "A sprite is a character or object in Scratch."
        },
        {
          question: "Which block repeats instructions?",
          options: ["Loop", "Subject", "Attachment", "Folder"],
          answer: 0,
          explanation: "Repeat and forever are loop blocks."
        },
        {
          question: "The green flag is commonly used to start a Scratch script.",
          options: ["True", "False"],
          answer: 0,
          explanation: "When green flag clicked is a common event in Scratch."
        }
      ]
    }
  ],
  activities: [
    { id: "identify-parts", lessonId: "fundamentals", title: "Identify Computer Parts", type: "Lab", task: "Point to or label monitor, CPU, keyboard, mouse, printer, and speakers.", outcome: "I can identify main hardware parts." },
    { id: "hardware-software", lessonId: "fundamentals", title: "Hardware or Software Sort", type: "Quick Check", task: "Sort these: keyboard, mouse, Windows, Word, Paint, monitor, Scratch.", outcome: "I can separate touchable parts from programs." },
    { id: "input-output", lessonId: "fundamentals", title: "Input or Output", type: "Quick Check", task: "Classify keyboard, mouse, microphone, monitor, printer, speaker, touch screen.", outcome: "I can identify how data enters and leaves a computer." },
    { id: "folder-practice", lessonId: "windows-files", title: "Create Computer Practice Folder", type: "Lab", task: "Create a folder named Computer Practice and keep class files inside it.", outcome: "I can create and use a folder." },
    { id: "copy-move-rename", lessonId: "windows-files", title: "Copy, Move, Rename", type: "Lab", task: "Practice copying, moving, and renaming a sample file with teacher guidance.", outcome: "I can organize files without losing them." },
    { id: "save-open-file", lessonId: "windows-files", title: "Save and Open a File", type: "Lab", task: "Type three lines, save as My_First_Work, close it, and open it again.", outcome: "I can save and reopen work." },
    { id: "word-season", lessonId: "word", title: "My Favourite Season", type: "Document", task: "Create a one-page document about your favourite season.", outcome: "I can type and save a clear document." },
    { id: "word-format-title", lessonId: "word", title: "Title Formatting", type: "Document", task: "Make the title centered, bold, and larger than the body text.", outcome: "I can format headings." },
    { id: "word-table-list", lessonId: "word", title: "List and Table", type: "Document", task: "Add a three-point list and a 2-column, 2-row table.", outcome: "I can use lists and tables." },
    { id: "excel-marksheet", lessonId: "excel", title: "Build a Marksheet", type: "Spreadsheet", task: "Create headers Name, Subject 1, Subject 2, Total and enter at least five students.", outcome: "I can enter spreadsheet data." },
    { id: "excel-formula-check", lessonId: "excel", title: "Formula Practice", type: "Spreadsheet", task: "Use SUM and one of AVERAGE, MAX, or MIN.", outcome: "I can calculate using formulas." },
    { id: "excel-chart", lessonId: "excel", title: "Column Chart", type: "Spreadsheet", task: "Create a simple column chart from student totals.", outcome: "I can turn data into a chart." },
    { id: "ppt-my-school", lessonId: "powerpoint", title: "My School Presentation", type: "Slides", task: "Create a 4-slide presentation: title, places, picture, and how computers help.", outcome: "I can make a simple presentation." },
    { id: "ppt-layout-match", lessonId: "powerpoint", title: "Choose Slide Layouts", type: "Slides", task: "Use Title Slide, Title and Content, Two Content, and Blank where suitable.", outcome: "I can choose layouts for a purpose." },
    { id: "ppt-present", lessonId: "powerpoint", title: "Present Confidently", type: "Speaking", task: "Present your slides using short points and clear voice.", outcome: "I can explain slides to a group." },
    { id: "safe-search", lessonId: "internet-email", title: "Safe Search", type: "Internet", task: "Search for a useful topic such as state animal or uses of computers in farming and write three points.", outcome: "I can search safely with clear keywords." },
    { id: "practice-email", lessonId: "internet-email", title: "Practice Email", type: "Email", task: "Compose a practice email with To, Subject, short message, and teacher-approved attachment.", outcome: "I can understand email parts." },
    { id: "drive-upload", lessonId: "internet-email", title: "Drive Upload", type: "Cloud Storage", task: "Upload a practice file to Drive and discuss safe sharing.", outcome: "I can store a file online carefully." },
    { id: "canva-certificate", lessonId: "canva-ai", title: "Canva Certificate", type: "Design", task: "Use a template, edit text boxes, add simple elements, and download the design.", outcome: "I can edit a template responsibly." },
    { id: "ai-responsible-check", lessonId: "canva-ai", title: "Responsible AI Choices", type: "Discussion", task: "Decide whether examples of AI use are responsible or irresponsible.", outcome: "I can use AI as learning help, not copying." },
    { id: "poster-safe-computers", lessonId: "canva-ai", title: "Safe Computers Poster", type: "Design", task: "Create a poster with a title, visual, and message: Use Computers Safely.", outcome: "I can combine design and safety learning." },
    { id: "scratch-moving-sprite", lessonId: "scratch", title: "Moving Sprite", type: "Coding", task: "Create a sprite that moves when the green flag is clicked.", outcome: "I can connect event and motion blocks." },
    { id: "scratch-flow-order", lessonId: "scratch", title: "Order the Blocks", type: "Coding", task: "Place blocks in order: green flag, repeat, move, if on edge, bounce.", outcome: "I can read simple program flow." },
    { id: "scratch-fruit", lessonId: "scratch", title: "Catch the Falling Fruit Idea", type: "Coding", task: "Plan how a fruit sprite falls and how another sprite catches it.", outcome: "I can describe event, motion, loop, and condition in a game idea." }
  ],
  finalProject: {
    title: "Final Project and Assessment",
    totalMarks: 20,
    intro: "Complete both parts and use the checklist before submitting. The assessment total is 20 marks.",
    parts: [
      {
        title: "Part A: Word Document",
        topic: "My Village or My Favourite Festival",
        requirements: [
          "One-page write-up",
          "Title center-aligned, bold, and larger",
          "Body left-aligned with readable font size",
          "At least one bold, italic, or underlined word or line",
          "At least a 3-point bulleted or numbered list",
          "Small table with at least 2 columns and 2 rows",
          "Saved with required naming format"
        ]
      },
      {
        title: "Part B: Excel Marksheet",
        topic: "Simple student marksheet",
        requirements: [
          "Headers: Name, Subject 1, Subject 2, Total",
          "At least five students",
          "Numeric marks",
          "Real =SUM() formula",
          "One additional formula: AVERAGE, MAX, or MIN",
          "Simple column chart",
          "Correct file naming and saving"
        ]
      }
    ],
    rubric: [
      { area: "Word Document - Formatting and Structure", marks: 6, evidence: "Title, alignment, readable body, and formatting are correct." },
      { area: "Word Document - List and Table", marks: 4, evidence: "At least 3-point list and 2 x 2 table are present." },
      { area: "Excel - Data Entry and Formulas", marks: 6, evidence: "Five students, numeric marks, SUM, and one extra formula are correct." },
      { area: "Excel - Chart", marks: 2, evidence: "A simple column chart is made from the marksheet data." },
      { area: "File Naming and Saving", marks: 2, evidence: "Files are saved with the required names and can be opened." }
    ],
    checklist: [
      "Word document topic selected",
      "Word title centered, bold, and larger",
      "Word body readable and left-aligned",
      "Word formatting includes bold, italic, or underline",
      "Word list has at least 3 points",
      "Word table has at least 2 columns and 2 rows",
      "Excel headers are correct",
      "Excel has at least five students",
      "Excel marks are numeric",
      "Excel uses real SUM formula",
      "Excel uses AVERAGE, MAX, or MIN",
      "Excel column chart is inserted",
      "Files are named and saved correctly",
      "I opened the saved files to check them"
    ]
  },
  teacherTips: [
    "Interactive mouse & keyboard pass-around to reduce fear and build confidence",
    "Blackboard visuals first, then the computer screen — sketch concepts on the board before opening the lab",
    "Use relatable datasets (class names, village market items) when practicing Excel",
    "Keep a small printed checklist on each desk so students can self-check",
    "Demonstrate once, then circulate and help students individually; celebrate completed work"
  ],
  selfAssessment: [
    "I can identify computer parts",
    "I can use the mouse properly",
    "I can type simple sentences",
    "I can save and open files",
    "I can format a Word document",
    "I can use spreadsheet formulas",
    "I can make a simple presentation",
    "I can search the internet carefully",
    "I can use email and Drive safely",
    "I can use AI responsibly",
    "I can understand basic Scratch blocks",
    "I know basic cyber safety rules"
  ],
  glossary: [
    ["CPU", "The control part of a desktop computer, often called the brain."],
    ["Hardware", "Physical computer parts that can be touched."],
    ["Software", "Programs that tell the computer what to do."],
    ["Input", "Data or commands given to a computer."],
    ["Output", "The result shown, printed, or played by a computer."],
    ["File", "Saved work such as a document, picture, spreadsheet, or presentation."],
    ["Folder", "A place used to keep related files together."],
    ["URL", "The address of a website."],
    ["Browser", "An app used to open websites."],
    ["Search Engine", "A website used to find information."],
    ["Attachment", "A file sent with an email."],
    ["Formula", "An Excel instruction that calculates a result."],
    ["Theme", "A consistent style for PowerPoint slides."],
    ["Template", "A ready design starting point."],
    ["AI", "A computer system that can help answer or explain, but may be wrong."],
    ["Sprite", "A character or object in Scratch."],
    ["Loop", "A coding block that repeats instructions."],
    ["Condition", "A coding check that decides what happens next."],
    ["Cyber Safety", "Staying safe while using computers and the internet."],
    ["Digital Etiquette", "Good manners while using digital tools."]
  ]
};
