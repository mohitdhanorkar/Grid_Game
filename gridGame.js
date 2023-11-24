function shufflePieces() {
    const pieces = document.querySelectorAll(".puzzle"); 
    const positions = [...Array(pieces.length).keys()];  

    for (let i = positions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  

        [positions[i], positions[j]] = [positions[j], positions[i]]; // exchange the position
    }
    pieces.forEach((piece, index) => {
        piece.style.order = positions[index];
    }); 
}g

    let draggedPiece = null;

    function dragStart(event) {
        draggedPiece = event.target;
        event.dataTransfer.setData("text/plain", event.target.id);
    }
    
    function dragOver(event) {
        event.preventDefault();
    }
    
    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const dropTarget = event.target;
    
        // Check if the drop target is a valid puzzle piece 
        if (dropTarget.classList.contains("puzzle") && dropTarget !== draggedPiece) {
            const dropTargetOrder = parseInt(dropTarget.style.order);
            const draggedPieceOrder = parseInt(draggedPiece.style.order);
    
            // Swap the order of the dragged piece and the drop target
            [dropTarget.style.order, draggedPiece.style.order] = [draggedPieceOrder, dropTargetOrder];
        }
    }
    
    document.addEventListener("DOMContentLoaded", () => {  //DOMContentLoaded use for when we load an page then puzzle will reset as it is at its original 
        const pieces = document.querySelectorAll(".puzzle");
        pieces.forEach(piece => {
            piece.addEventListener("dragover", dragOver);
            piece.addEventListener("drop", drop);
        });
    });
    function refreshPage(){
        location.reload();
    }

