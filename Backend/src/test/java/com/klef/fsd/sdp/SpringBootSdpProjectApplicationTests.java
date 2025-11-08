package com.klef.fsd.sdp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

// This annotation will tell Spring Boot to look for your main application class 
// and bootstrap the full application context for testing.
@SpringBootTest(classes = SpringBootSdpProjectApplication.class)
class SpringBootSdpProjectApplicationTests {

    @Test
    void contextLoads() {
        // This simply checks if the Spring application context starts successfully
    }
}
