package com.java.classes;

import java.net.MalformedURLException;
import java.net.URL;

public class Client {

	public static String readData() {
		StringBuffer sb = null;
		
		try {
			URL url = new URL(
					"http://localhost:8080/ClientTaskAngular/rest/getJsonData");
			SiteConnection aConnection = new SiteConnection(url);
			sb = aConnection.getContents();
			System.out.println(sb.toString());
			
		} catch (MalformedURLException mfe) {
			System.err.println(mfe.getMessage());
		} catch (Exception e) {
			// TODO Auto-generated catch block`
			e.printStackTrace();
		}
		return sb.toString();

	}

}
