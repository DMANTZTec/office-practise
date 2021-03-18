package programs;

	class Cars1 extends Vehicle{
		private String modelname = "Mustang";
		public static void main(String[] args) {
			Cars1 myCars=new Cars1();
			myCars.honk();
			System.out.println(myCars.brand +" "+myCars.modelname);
}
	}
