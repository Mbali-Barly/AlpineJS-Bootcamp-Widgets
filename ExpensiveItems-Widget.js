document.addEventListener('alpine:init', () => {
    Alpine.data('dataForExpensiveItems', function () {
        return {
            product : '',
            object : '',
    
            itemsOver20 () {
                this.product = findItemsOver20(this.object);
    
                setTimeout(() => {
                    this.product = '';
                    }, 5000);
            }

        }
    })
})