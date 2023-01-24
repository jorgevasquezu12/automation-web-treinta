class metodosDePago
{
    elements = {
        btnPagoTranferencia: '[data-testid="balance_card_payment_types_4"]',
        btnPagoOtro: '[data-testid="balance_card_payment_types_4"]',
        btnPagoTarjeta: '[data-testid="balance_card_payment_types_2"]',
        btnPagoDatafonoTreinta: '[data-testid="balance_card_payment_types_12"]',
        btnPagoEfectivo: '[data-testid="balance_card_payment_types_1"]'
    }

    clickBtnPagoTranferencia(){
        cy.get(this.elements.btnPagoTranferencia).click()
    }
    clickBtnPagoOtro(){
        cy.get(this.elements.btnPagoOtro).click()
    }
    clickBtnPagoTarjeta(){
        cy.get(this.elements.btnPagoTarjeta).click()
    }
    clickBtnPagoDatafonoTreinta(){
        cy.get(this.elements.btnPagoDatafonoTreinta).click()
    }
    clickBtnPagoEfectivo(){
        cy.get(this.elements.btnPagoEfectivo).click()
    }

}
module.exports = new metodosDePago();