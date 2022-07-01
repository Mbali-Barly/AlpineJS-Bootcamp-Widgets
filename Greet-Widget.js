
document.addEventListener('alpine:init', () => {
    Alpine.data('dataForGreet', function () {
        return {
            name : '',
            message : '',
        
            greetMe() {
                this.message = greet(this.name);
        
            setTimeout(() => {
                this.message = '';
            }, 5000);
            } 
        
        }
    })
})