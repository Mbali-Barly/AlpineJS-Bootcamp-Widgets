document.addEventListener('alpine:init', () => {
    Alpine.data('dataForTransportFee', function () {
    return {
        price : '',
        shift : '',
       
        whichShift () {
            this.price = transportFee(this.shift);
        }  
    }   
    })
})