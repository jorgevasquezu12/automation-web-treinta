class InventarioTreinta{
    elements = {
        btnbuscarProducto: '.MuiOutlinedInput-root',
        btnProducto: '[data-testid="default-itemCard"]',
        btnEliminarProducto: '.sc-5c15439c-19 > .sc-5c15439c-6 > .sc-5c15439c-8',
        btnConfirmarEliminar: '.dACLwQ',
        btnAgregarProducto: '#test > :nth-child(2)',
        btnAgregarProductoManual: '[data-value="Crear productos manualmente"] > .sc-hiDMwi',
    }

    clickBtnAgregarProducto(){
        cy.get(this.elements.btnAgregarProducto).click()
    }
    clickBtnCrearProductoManual(){
        cy.get(this.elements.btnAgregarProductoManual).click()
    }
    EscribirProductoABuscar(producto){
        cy.get(this.elements.btnbuscarProducto).click().type(producto);
    }
    clickBtnProducto(){
        cy.get(this.elements.btnProducto).click()
    }
    clickBtnEliminarProducto(){
        cy.get(this.elements.btnEliminarProducto).click()
    }
    clickBtnConfirmarEliminar(){
        cy.get(this.elements.btnConfirmarEliminar).click()
    }

}module.exports = new InventarioTreinta();