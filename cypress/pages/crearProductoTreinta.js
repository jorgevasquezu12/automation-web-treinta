class crearProductoTreinta {
    elements = {
        nombreProducto: '[data-testid="inventory_input_nameProduct"]',
        codigoBarras: '[data-testid="inventory_input_barCodeProduct"]',
        cantidadDisponible: '[data-testid="default-quantity-input-quantity"]',
        costoUnitario: '[data-testid="inventory_inputCurrency_costProduct"]',
        precio: '[data-testid="inventory_inputCurrency_priceProduct"]',
        Categoria: '[data-testid="inventory_inputCurrency_priceProduct"]',
        descripcion: '[data-testid="inventory_textAreaInput_descriptionProduct"]',
        btnCrearProducto: '[data-testid="inventory_button_addProduct"]',
        mensajeEmergenteExitoso: '.sc-hLBbgP'
    }
    escribirNombreProducto(nombreProducto){
        cy.get(this.elements.nombreProducto).click().type(nombreProducto)
    }
    escribirCodigoBarras(codigoBarras){
        cy.get(this.elements.codigoBarras).click().type(codigoBarras)
    }
    escribirCantidadDisponible(cantidadDisponible){
        cy.get(this.elements.cantidadDisponible).click().type(cantidadDisponible)
    }
    escribirCostoUnitario(costoUnitario){
        cy.get(this.elements.costoUnitario).click().type(costoUnitario)
    }
    escribirPrecio(precio){
        cy.get(this.elements.precio).click().type(precio)

    }
    escribirCategoria(Categoria){
        this.elements.Categoria().click().type(Categoria)
    }
    escribirDescripcion(descripcion){
        cy.get(this.elements.descripcion).click().type(descripcion)
    }
    clickBtnCrearProducto(){
        cy.get(this.elements.btnCrearProducto).click()
    }
    mensajeEmergenteExitoso(){
        cy.get(this.elements.mensajeEmergenteExitoso)
            .should('be.visible')
            .and('contain', 'Producto creado exitosamente')
            .should('have.css', 'background-color', 'rgb(0, 128, 0)')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
    }

}
module.exports = new crearProductoTreinta();
