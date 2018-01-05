/**
 * Created by sartori on 16/03/17.
 */
export class RoutesClientUtil {
  public static URL_API = 'http://localhost:8080/sinarm/api/';
  public static GUNS = RoutesClientUtil.URL_API + 'armas/';
  public static CLIENTS = RoutesClientUtil.URL_API + 'usuarios/';
  public static SEX = RoutesClientUtil.URL_API + 'generos/';
  public static LVL_ACCESS = RoutesClientUtil.URL_API + 'usuarios-niveis-acessos/';
  public static LICENCES = RoutesClientUtil.URL_API + 'licencas/';
  public static LICENCES_TYPES = RoutesClientUtil.URL_API + 'licencas-categorias/';
  public static EXAMS = RoutesClientUtil.URL_API + 'exames/';
  public static EXAMS_TYPES = RoutesClientUtil.URL_API + 'exames-categorias/';
  public static LOGIN = RoutesClientUtil.URL_API + 'login/';
}
