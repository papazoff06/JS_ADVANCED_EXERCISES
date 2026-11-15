function solve() {
    document.querySelector('form').addEventListener('submit', onSubmit);
    
    const taskRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dateRef = document.getElementById('date');
    const buttonRef = document.getElementById('add');
    
    function onSubmit(ev){
        ev.preventDefault();
        let task = taskRef.value;
        let description = descriptionRef.value;
        let date = dateRef.value;
        
        if(task && description && date){
            console.log('hi');
    }
}
}