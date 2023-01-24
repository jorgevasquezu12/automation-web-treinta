class venta {
    elements = {
        btnVenta: '[data-testid="inventory_dropdown_sale"] > #test',
        btnVentaProductos: '[data-testid="balance_dropdown_sale"]',
        btnVentaLibre: '.MuiList-root > :nth-child(2)',
        btnbuscarProducto: '[data-testid="default-search-input"]',
        btnConfirmarProducto: '[data-testid="balanceSale_basket_button_confirm"]',
        btnConfirmarVenta: '[data-testid="balance_button_createTransaction"]',
         }
    clickBtnVenta(){
        cy.get(this.elements.btnVenta).click()
    }
    clickBtnVentaProductos(){
        cy.get(this.elements.btnVentaProductos).click()
    }
    clickBtnVentaLibre(){
        cy.get(this.elements.btnVentaLibre).click()
    }
    EscribirProductoABuscar(producto){
        cy.get(this.elements.btnbuscarProducto).click().type(producto);
    }
    clickBtnConfirmarProducto(){
        cy.get(this.elements.btnConfirmarProducto).click()
    }
    clickBtnConfirmarVenta(){
        cy.get(this.elements.btnConfirmarVenta).click()
    }

}
module.exports = new venta();