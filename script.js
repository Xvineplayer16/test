function updateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.toLocaleString("en-GB", { weekday: "short" });
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}`;
    dateElement.textContent = `${day} ${date}/${month}`;
}

setInterval(updateTime, 1000);
updateTime();
