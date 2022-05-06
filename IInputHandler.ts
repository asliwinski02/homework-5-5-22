interface IInputHandler{
  public void madeLeftMove();
  public void resetRightMove();
}
class LRKeyInputHandler implements IInputHandler {
  public void madeLeftMove() {
    System.out.println("wasLeftArrowPushed")
  }
  public void resetRightMove() {
    System.out.println("wasRightArrowPushed")
  }
}

class HumanPlayer implements Player {
  
}

