package programs;

public class Light {
	boolean Ison;

	public void turnon() {
		Ison=true;
		System.out.println("Is Light On?" + Ison);
	}
	public void turnoff() {
		Ison=false;
		System.out.println("Is Light Off?" + Ison);
	}
	public static void main(String[] args) {
		Light led=new Light();
		Light halogen=new Light();
		led.turnon();
		halogen.turnoff();
	}
}
