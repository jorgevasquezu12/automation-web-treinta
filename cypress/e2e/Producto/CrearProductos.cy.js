import inventarioTreinta from '../../pages/inventarioTreinta';
import crearProductoTreinta from '../../pages/crearProductoTreinta';



import products from '../../fixtures/products.json';

describe('Crear Producto', () => {
beforeEach(() =>{
    window.localStorage.setItem('amplitude_unsent_db53eaeb610da2d67c47a5d26d98624b', '[]');
    window.localStorage.setItem('amplitude_unsent_identify_db53eaeb610da2d67c47a5d26d98624b', '[]');
    window.localStorage.setItem('LOCAL_STORAGE_FIRST_TIMES', '{"BALANCE_WALKTHROUGH_FIRSTIME":"true",' +
        '"SPEND_CATEGORY_WALKTHROUGH":"true",' +
        '"PRINTER_TOGGLE_WALKTHROUGH":"true"}');
   cy.visit('/inventario');
})
    it('validar campos requeridos', function () {
        cy.wait(100);
        inventarioTreinta.clickBtnAgregarProducto();
        inventarioTreinta.clickBtnCrearProductoManual();
        cy.wait(1000);
        crearProductoTreinta.escribirNombreProducto(products[0].nameProduct);
        crearProductoTreinta.escribirCodigoBarras(products[0].barcodeProduct);
        crearProductoTreinta.escribirCantidadDisponible(products[0].quantityProduct);
        crearProductoTreinta.escribirCostoUnitario(products[0].priceunitProduct);
        crearProductoTreinta.escribirPrecio(products[0].priceProduct);
        crearProductoTreinta.escribirDescripcion(products[0].descriptionProduct);
        crearProductoTreinta.clickBtnCrearProducto();
    });

after(() => {
    //Eliminar el productro creado
    cy.diliteProduct();

})
});