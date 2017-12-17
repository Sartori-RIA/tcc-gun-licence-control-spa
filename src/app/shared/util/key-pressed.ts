export class KeyPressed {
  /** digitar apenas numeros
   */
  public static _keyPressOnlyNumber(event: any): void {
    const pattern = /[0-9+\-]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  /**
   * enviar formulario pressionando enter
   */
  public static keyBlurFunction(e: any): boolean {
    return (e.keyCode == 13);
  }
}
