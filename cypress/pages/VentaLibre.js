class VentaLibre{
    elements = {
        btnPagada: '.gbwLEz',
        btnCreditos: '.jbTqsI',
        valor: '[data-testid="balance_create_free_sale_calculator_input_value"]',
        btnCrearVenta: '[data-testid="balance_button_createTransaction"]',
        btnBuscarCliente: '[data-testid="balance_autocomplete_contacts"] > .MuiFormControl-root > .MuiOutlinedInput-root',
        confirmacionVenta:'[data-testid="balanceSale_text_title"]',
        validacionValorvVenta: '[data-testid="balanceSale_text_balanceText"]',
        validacionMensajeEmergente: '.sc-eDvSVe'
    }
    clickBtnPagada(){
        cy.get(this.elements.btnPagada).click()
    }
    clickBtnCreditos(){
        cy.get(this.elements.btnCreditos).click()
    }
    EscribirValor(valor){
        cy.get(this.elements.valor).click().type(valor);
    }
    clickBtnCrearVenta(){
        cy.get(this.elements.btnCrearVenta).click();
    }
    clickBtnBuscarCliente(cliente){
        //Buscar un elemento de una lista y dar click
        cy.get(this.elements.btnBuscarCliente).click().type(cliente);
    }
    ConfirmacionVenta(){
        cy.get(this.elements.confirmacionVenta).should('be.visible')
            .should('have.text', '¡Creaste una venta!');
    }
    ValidacionValorVenta(valor){
        cy.get(this.elements.validacionValorvVenta).should('have.text', 'Se registró en tu balance por un valor de $ '+valor);
    }
    ValidacionMensajeEmergente(){
        cy.get(this.elements.validacionMensajeEmergente).should('be.visible')
            .should('have.text', 'Registraste una venta. La verás en Ingresos.')
            .should('have.css', 'background-color', 'rgb(26, 39, 50)');
    }



}module.exports = new VentaLibre();