document.addEventListener('alpine:init', () => {
    Alpine.data('dataForEnoughAirtime', function () {
        return {
            airtimeUsage : '',
            amountAvailable : '',
            airtimeMessage : 'amount of airtime left...',

            calculate() {
                this.airtimeUsage = enoughAirtime(this.airtimeUsage, this.amountAvailable);
            }
            
        }
    })
})