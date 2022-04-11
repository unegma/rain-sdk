/**
 * ExampleClass
 */
export default class ExampleClass {
  private readonly name: string;

  /**
   * Constructor
   * @param name
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Say Hello
   */
  public sayHello = () => {
    return `Hello ${this.name}`;
  }
}
