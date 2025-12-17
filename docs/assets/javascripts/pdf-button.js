document.addEventListener("DOMContentLoaded", function() {
    // Determine where to place the button. 
    // We'll place it in the header topic area for visibility, or prepended to the article.
    var targetContainer = document.querySelector(".md-header__topic");
    
    if (targetContainer) {
        var buttonWrapper = document.createElement("div");
        buttonWrapper.className = "pdf-button-wrapper";
        buttonWrapper.style.marginLeft = "10px";
        buttonWrapper.style.display = "inline-block";
        buttonWrapper.style.verticalAlign = "middle";

        var button = document.createElement("button");
        button.innerText = "Télécharger PDF";
        button.className = "md-button md-button--primary";
        button.style.backgroundColor = "white";
        button.style.color = "var(--md-primary-fg-color)";
        button.style.border = "1px solid currentColor";
        button.style.fontSize = "0.7rem";
        button.style.padding = "4px 8px";
        button.style.cursor = "pointer";
        button.style.borderRadius = "2px";
        button.style.fontWeight = "bold";

        button.onclick = function() {
            window.print();
        };

        buttonWrapper.appendChild(button);
        targetContainer.appendChild(buttonWrapper);
    }
});
