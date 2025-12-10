document.addEventListener("DOMContentLoaded", () => {
  const lessonTitle = document.getElementById("lesson-title");
  let lessonVideo = document.getElementById("lesson-video");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

 
  const lessons = [
    { title: "1 Сабақ: HTML,CSS", video: "https://youtu.be/nwyfRTbliho?si=KOqM5oxgIAJAqZFO" },
    { title: "2 Сабақ: h1,a,link", video: "https://youtu.be/DQUxu0F4feg" },
    { title: "3 Сабақ: Проекті жалғастыру", video: "https://youtu.be/w8NJYMx2KEM" },
    { title: "4 Сабақ: Видео қою", video: "https://youtu.be/MDroVSyD36A" },
    { title: "5 Сабақ: Жаңа проект", video: "https://youtu.be/XU9osznQsBA" },
    { title: "6 Сабақ: Жаңа проекті жалғастыру", video: "https://youtu.be/YFDOBlnZgmI?si=btzRH6eJxsLn6Irr" },
    { title: "7 Сабақ: Қызметтер", video: "https://youtu.be/a1tifemIBXI?si=dMOKzipssxOovtei" },
    { title: "8 Сабақ: Teachers and Students", video: "https://youtu.be/YFDOBlnZgmI?si=btzRH6eJxsLn6Irr" },
    { title: "9 Сабақ: Қатені жөндеу", video: "https://youtu.be/YFDOBlnZgmI?si=btzRH6eJxsLn6Irr" },
    { title: "10 Сабақ: FAQ", video: "https://youtu.be/YFDOBlnZgmI?si=btzRH6eJxsLn6Irr" },
    { title: "11 Сабақ: FAQ", video: "https://youtu.be/YFDOBlnZgmI?si=btzRH6eJxsLn6Irr" },
    { title: "12 Сабақ: Google Form", video: "https://youtu.be/YFDOBlnZgmI?si=btzRH6eJxsLn6Irr" },
    { title: "13 Сабақ: Соңы", video: "https://youtu.be/YFDOBlnZgmI?si=btzRH6eJxsLn6Irr" },
    { title: "14 Сабақ: Үй жұмысы(тг жіберу)", video: "https://youtu.be/YFDOBlnZgmI?si=btzRH6eJxsLn6Irr" }
  ];

  let currentLesson = 0;

 
  function showLesson(index) {
    const lesson = lessons[index];
    lessonTitle.textContent = lesson.title;

  
    if (lesson.video.includes("youtu")) {
      lessonVideo.outerHTML = `
        <iframe id="lesson-video" width="100%" height="400"
          src="https://www.youtube.com/embed/${getYouTubeID(lesson.video)}"
          frameborder="0" allowfullscreen>
        </iframe>`;
    } else {
      lessonVideo.outerHTML = `
        <video id="lesson-video" width="100%" height="400" controls>
          <source src="${lesson.video}" type="video/mp4">
          Сіздің браузер бейнені қолдамайды.
        </video>`;
    }

  
    lessonVideo = document.getElementById("lesson-video");

 
    prevBtn.style.display = index === 0 ? "none" : "inline-block";
    nextBtn.style.display = index === lessons.length - 1 ? "none" : "inline-block";
  }

 
  function getYouTubeID(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

 
  prevBtn.addEventListener("click", () => {
    if (currentLesson > 0) {
      currentLesson--;
      showLesson(currentLesson);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentLesson < lessons.length - 1) {
      currentLesson++;
      showLesson(currentLesson);
    }
  });

 
  showLesson(currentLesson);
});