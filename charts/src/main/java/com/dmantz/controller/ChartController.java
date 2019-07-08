package com.dmantz.controller;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.services.ChartService;

import net.sf.jasperreports.engine.DefaultJasperReportsContext;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;

@RestController

public class ChartController {
	
	@Autowired
	private ChartService chartService;
	
	@Autowired
	private ApplicationContext applicationConntext;
	
	
	@RequestMapping(value="index")
public String index() {
		System.out.println("entered");
		return "index";
	}	
	
	
	//Jasper report for Order List in Pdf format	
		@RequestMapping(value="barreport")
		public  void generatePdfReportForBarChart(HttpServletResponse response)throws Exception {
			//response.setContentType("application/pdf");
			JRBeanCollectionDataSource datasSource=new JRBeanCollectionDataSource(chartService.report());
			System.out.println("Order List In PdfReport");
			System.out.println("Order List:"+chartService.report());

			InputStream inputstream=this.getClass().getResourceAsStream("/reports/bar_chart.jrxml");
			JasperDesign design = JRXmlLoader.load(inputstream);
			JasperReport Jasperreoport=JasperCompileManager.compileReport(design);
			JasperPrint jasperPrint=JasperFillManager.fillReport(Jasperreoport,null,datasSource);
			
			//JasperExportManager.exportReportToPdfFile(jasperPrint,"E://order_report.pdf");
					
			JRPdfExporter pdfExporter=new JRPdfExporter(DefaultJasperReportsContext.getInstance());
			pdfExporter.setExporterInput(new SimpleExporterInput(jasperPrint));
			
			ByteArrayOutputStream pdfReportStream = new ByteArrayOutputStream();
			
		    pdfExporter.setExporterOutput(new SimpleOutputStreamExporterOutput(pdfReportStream));
		    pdfExporter.exportReport();
		    
			/*			    
		    SimplePdfExporterConfiguration configuration = new SimplePdfExporterConfiguration();
		    configuration.setPermissions(PdfExporterConfiguration.ALL_PERMISSIONS);
		    configuration.setPermissions(PdfWriter.ALLOW_COPY | PdfWriter.ALLOW_PRINTING);
		    pdfExporter.setConfiguration(configuration);
		    */
		    
		    response.setContentType("application/pdf");
	        response.setHeader("Content-Length", String.valueOf(pdfReportStream.size()));
	        response.addHeader("Content-Disposition", "inline; filename=jasper.pdf;");
	        
			OutputStream responseOutputStream = response.getOutputStream();
			
	        responseOutputStream.write(pdfReportStream.toByteArray());
	        responseOutputStream.close();
	        pdfReportStream.close();
		 
		}

		@RequestMapping(value="piereport")
		public  void generatePdfReportForPieChart(HttpServletResponse response)throws Exception {
			//response.setContentType("application/pdf");
			JRBeanCollectionDataSource datasSource=new JRBeanCollectionDataSource(chartService.report());
			System.out.println("Order List In PdfReport");
			System.out.println("Order List:"+chartService.report());

			InputStream inputstream=this.getClass().getResourceAsStream("/reports/pie_chart.jrxml");
			JasperDesign design = JRXmlLoader.load(inputstream);
			JasperReport Jasperreoport=JasperCompileManager.compileReport(design);
			JasperPrint jasperPrint=JasperFillManager.fillReport(Jasperreoport,null,datasSource);
			
			//JasperExportManager.exportReportToPdfFile(jasperPrint,"E://order_report.pdf");
					
			JRPdfExporter pdfExporter=new JRPdfExporter(DefaultJasperReportsContext.getInstance());
			pdfExporter.setExporterInput(new SimpleExporterInput(jasperPrint));
			
			ByteArrayOutputStream pdfReportStream = new ByteArrayOutputStream();
			
		    pdfExporter.setExporterOutput(new SimpleOutputStreamExporterOutput(pdfReportStream));
		    pdfExporter.exportReport();
		    
			/*			    
		    SimplePdfExporterConfiguration configuration = new SimplePdfExporterConfiguration();
		    configuration.setPermissions(PdfExporterConfiguration.ALL_PERMISSIONS);
		    configuration.setPermissions(PdfWriter.ALLOW_COPY | PdfWriter.ALLOW_PRINTING);
		    pdfExporter.setConfiguration(configuration);
		    */
		    
		    response.setContentType("application/pdf");
	        response.setHeader("Content-Length", String.valueOf(pdfReportStream.size()));
	        response.addHeader("Content-Disposition", "inline; filename=jasper.pdf;");
	        
			OutputStream responseOutputStream = response.getOutputStream();
			
	        responseOutputStream.write(pdfReportStream.toByteArray());
	        responseOutputStream.close();
	        pdfReportStream.close();
		 
		}

		
}
