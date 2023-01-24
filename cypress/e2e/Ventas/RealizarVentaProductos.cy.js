import venta from '../../pages/venta';
import sku from '../../fixtures/sku.json';
import metodosDePago from '../../pages/metodosDePago'
import VentaLibre from '../../pages/VentaLibre'

describe('Realizar venta de productos', () => {
    beforeEach(() =>{
        window.localStorage.setItem('amplitude_unsent_db53eaeb610da2d67c47a5d26d98624b', '[]');
        window.localStorage.setItem('amplitude_unsent_identify_db53eaeb610da2d67c47a5d26d98624b', '[]');
        window.localStorage.setItem('LOCAL_STORAGE_FIRST_TIMES', '{"BALANCE_WALKTHROUGH_FIRSTIME":"true",' +
            '"SPEND_CATEGORY_WALKTHROUGH":"true",' +
            '"PRINTER_TOGGLE_WALKTHROUGH":"true"}');
        cy.visit('/balance');
    })
    it('Realizar venta de productos con pago efectivo', function () {
        cy.wait(1000);
        venta.clickBtnVenta();
        cy.log('Se da click en el boton de venta');
        venta.clickBtnVentaProductos();
        cy.wait(1000);
        venta.EscribirProductoABuscar(sku[1].skuProducto);
        venta.EscribirProductoABuscar(sku[0].skuProducto);
        venta.clickBtnConfirmarProducto();
        metodosDePago.clickBtnPagoEfectivo()
        venta.clickBtnConfirmarVenta();
    });
    it('Realizar venta libre a credito con pago tranferencia', function () {
        cy.wait(1000);
        venta.clickBtnVenta();
        cy.log('Se da click en el boton de venta');
        venta.clickBtnVentaLibre();
        cy.wait(1000);
        VentaLibre.clickBtnPagada();
        VentaLibre.EscribirValor(sku[2].valorUnitario);
        //metodosDePago.clickBtnPagoTranferencia();
        VentaLibre.clickBtnBuscarCliente("jorge")
        VentaLibre.clickBtnCrearVenta();
        VentaLibre.ValidacionMensajeEmergente();
        VentaLibre.ConfirmacionVenta();
        VentaLibre.ValidacionValorVenta(sku[2].valorUnitario);



    });
});