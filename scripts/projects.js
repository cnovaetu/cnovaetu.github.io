(function () {
    function Project(title, icon, tags, description, link) {
        this.title = title;
        this.icon = icon;
        this.tags = tags;
        this.description = description;
        this.link = link;
    }

    Project.prototype.render = function () {
        var listItem = document.createElement("li");
        listItem.className = "project-item";

        var headerDiv = document.createElement("div");
        headerDiv.className = "project-header";

        var img = document.createElement("img");
        img.className = "project-icon";
        img.src = this.icon;
        img.alt = "Иконка проекта " + this.title;

        var titleDiv = document.createElement("div");
        titleDiv.className = "project-title";
        titleDiv.textContent = this.title;

        headerDiv.appendChild(img);
        headerDiv.appendChild(titleDiv);

        var tagsDiv = document.createElement("div");
        tagsDiv.className = "project-tags";
        this.tags.forEach(function (tag) {
            var tagSpan = document.createElement("span");
            tagSpan.className = "project-tag";
            tagSpan.textContent = tag;
            tagsDiv.appendChild(tagSpan);
        });

        var projectcontent = document.createElement("div");
        projectcontent.className = "project-content";

        var descriptionP = document.createElement("p");
        descriptionP.className = "project-description";
        descriptionP.textContent = this.description;

        var linkA = document.createElement("a");
        linkA.className = "project-link";
        linkA.href = this.link;
        linkA.textContent = "Смотреть на GitHub";

        listItem.appendChild(headerDiv);
        listItem.appendChild(tagsDiv);
        projectcontent.appendChild(descriptionP);
        listItem.appendChild(projectcontent);
        listItem.appendChild(linkA);

        return listItem;
    };

    // Пример данных о проектах
    var projects = [
        new Project(
            "С-NOVA SnakeMP",
            "../img/projects-icons/snakemp-icon.png",
            ["Курсовая", "Программирование", "I семестр"],
            "Змейка для двух игроков со звуком.",
            "https://github.com/cnovaetu/cnova_snakemp/"
        ),
        new Project(
            "C-NOVA Nitrogen",
            "../img/projects-icons/nitrogen-icon.png",
            ["Курсовая", "Программирование", "II семестр"],
            "Компактный музыкальный плеер на Qt6.",
            "https://github.com/cnovaetu/cnova_nitrogen/"
        ),
        new Project(
            "GlobalLook",
            "../img/projects-icons/globallook-icon.png",
            ["Курсовая", "Учебная практика", "IV семестр"],
            "Веб-приложение для поиска новостей по карте.",
            "https://github.com/cnovaetu/GlobalLookCourseProject/"
        ),
        new Project(
            "С-NOVA Calc",
            "../img/projects-icons/calc-icon.png",
            ["Лабораторная", "Программирование", "I семестр"],
            "Простой калькулятор на языке C.",
            "https://github.com/cnovaetu/cnova_calc"
        ),
        new Project(
            "C-NOVA Spiral",
            "../img/projects-icons/spiral-icon.png",
            ["Лабораторная", "Программирование", "I семестр"],
            "Демонстрация алгоритма спиральки.",
            "https://github.com/cnovaetu/cnova_spiral"
        ),
        new Project(
            "C-NOVA Strings",
            "../img/projects-icons/strings-icon.png",
            ["Лабораторная", "Программирование", "I семестр"],
            "Демонстрация работы со строками.",
            "https://github.com/cnovaetu/cnova_strings/"
        ),
        new Project(
            "C-NOVA XO",
            "../img/projects-icons/XO-icon.png",
            ["Лабораторная", "Программирование", "I семестр"],
            "Крестики-Нолики со звуком.",
            "https://github.com/cnovaetu/cnova_xo/"
        ),
        new Project(
            "C-NOVA Matrix",
            "../img/projects-icons/matrix-icon.png",
            ["Лабораторная", "Программирование", "I семестр"],
            "Калькулятор алгебраических матриц.",
            "https://github.com/cnovaetu/cnova_matrix/"
        ),
        new Project(
            "C-NOVA Lists",
            "../img/projects-icons/lists-icon.png",
            ["Лабораторная", "Программирование", "I семестр"],
            "Демонстрация работы со списками.",
            "https://github.com/cnovaetu/cnova_lists/"
        ),
        new Project(
            "C-NOVA Compare",
            "../img/projects-icons/compare-icon.png",
            ["Лабораторная", "Программирование", "I семестр"],
            "Утилита для сравнения двух текстов по LCS (аналог diff).",
            "https://github.com/cnovaetu/cnova_compare/"
        ),
        new Project(
            "C-NOVA DB",
            "../img/projects-icons/db-icon.png",
            ["Лабораторная", "Программирование", "II семестр"],
            "Иерархическая база данных с консольным интерфейсом.",
            "https://github.com/cnovaetu/cnova_db/"
        ),
        new Project(
            "C-NOVA BMParser",
            "../img/projects-icons/bmparser-icon.png",
            ["Лабораторная", "Программирование", "II семестр"],
            "Парсер метаданных .bmp файлов",
            "https://github.com/cnovaetu/cnova_bmparser/"
        ),
        new Project(
            "C-NOVA Hello",
            "../img/projects-icons/hello-icon.png",
            ["Лабораторная", "Программирование", "II семестр"],
            "Hello world на Qt6.",
            "https://github.com/cnovaetu/cnova_hello/"
        ),
        new Project(
            "C-NOVA Tabs",
            "../img/projects-icons/tabs-icon.png",
            ["Лабораторная", "Программирование", "II семестр"],
            "Лабораторная на Qt6 со вкладочным интерфейсом.",
            "https://github.com/cnovaetu/cnova_tabs/"
        ),
        new Project(
            "C-NOVA App",
            "../img/projects-icons/app-icon.png",
            ["Лабораторная", "Программирование", "II семестр"],
            "Клиент-серверное приложение на Qt6 с базой данных.",
            "https://github.com/cnovaetu/cnova_app/"
        ),

    ];

    // Рендеринг проектов
    var projectList = document.querySelector(".project-list");
    projects.forEach(function (project) {
        projectList.appendChild(project.render());
    });
})();