package com.java.classes;

import java.io.BufferedReader;
import java.io.FileReader;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
public class RestTest {

	@GET
	@Path("/getJsonData")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crunchifyREST() {
		BufferedReader br = null;
		StringBuilder sb = new StringBuilder();
		try {
			br = new BufferedReader(new FileReader("Y:/rawdataupdated.rtf"));
			String line = null;
			while ((line = br.readLine()) != null) {
				sb.append(line);
			}
			br.close();
		} catch (Exception e) {
			System.out.println("Error Parsing: - ");
			e.printStackTrace();
		}

		// return HTTP response 200 in case of success
		return Response.status(200).entity(sb.toString()).build();
	}
}