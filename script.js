document.addEventListener("DOMContentLoaded", function () {
    const smallHand = document.querySelector(".small-hand");
    const largeHand1 = document.querySelector(".large-hand-1");
    const largeHand2 = document.querySelector(".large-hand-2");

    smallHand.style.transform = "translate(-50%, -100%) rotate(6deg)";

    largeHand1.style.transform = "translate(-50%, -100%) rotate(121deg)";

    largeHand2.style.transform = "translate(-50%, -100%) rotate(174deg)";
});
