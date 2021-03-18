package programs;

import programs.Shapes.Circle;
import programs.Shapes.Rectangle;
import programs.Shapes.Traingle;

public class Test {
		public  static void main(String args[]){
			Shapes s;
			s=new Rectangle();
			s.draw();
			s=new Circle();
			s.draw();
			s=new Traingle();
			s.draw();
			
		}
}
