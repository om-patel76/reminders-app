document.addEventListener("DOMContentLoaded", () => {
  const reminderIp = document.querySelector("#reminderInput");
  const reminderBtn = document.querySelector("#addReminder");
  const reminderList = document.querySelector("#reminderList");

  reminderBtn.addEventListener("click", () => {
    const reminderText = reminderIp.value.trim();
    if (reminderText !== "") {
      const reminderItem = document.createElement("li");
      reminderItem.innerHTML = `<span class='inline-block mr-2'>${reminderText}</span> <button class="delete text-red-500 hover:text-red-700">Delete</button>`;
      reminderList.appendChild(reminderItem);
      reminderIp.value = "";
      reminderIp.value = "";

      reminderItem.querySelector(".delete").addEventListener("click", () => {
        reminderItem.remove(reminderItem);
      });
    }
  });
});
