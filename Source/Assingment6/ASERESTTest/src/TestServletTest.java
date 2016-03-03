import static org.junit.Assert.*;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.ws.rs.core.Response;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import net.glxn.qrgen.QRCode;
import net.glxn.qrgen.image.ImageType;


public class TestServletTest {

	BufferedImage image;
	ByteArrayOutputStream baos;
	byte[] imageData;
	TestServlet ts;
	
	@Before
	public void setUp() throws Exception {
		baos =  QRCode.from("shweta").to(ImageType.PNG).stream();	   
	    ts = new TestServlet();
	   
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testconvertTextToByteArray() {
		assertNotNull(ts.convertTextToQRStream("shweta"));
	}
	@Test
	public void testgetMillisecondsFromEpoch() {
		
		assertTrue(ts.getMillisecondsFromEpoch() > 1456963129978L);
		assertFalse(ts.getMillisecondsFromEpoch() < 1456963129978L);
	}

}
