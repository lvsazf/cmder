import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.baomidou.kisso.SSOHelper;
import com.hw.model.UserRegisterVO;
import com.hw.util.SSOTokenImpl;


public class Userinfo extends com.justep.ui.impl.JProcessorImpl  {
	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		SSOTokenImpl token = (SSOTokenImpl) SSOHelper.getToken(request);
		if (token == null) {
			throw new RuntimeException("尚未登录，请登录后再操作");
		}
		UserRegisterVO user = token.getCacheObject();
		response.getWriter().print(user.getUserName());
		response.flushBuffer();
		
	}
}
