from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.urls import re_path
from user import views
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

]
wrongurlpatterns = [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
    # re_path('.*/', views.index, name='index'),
]

urlpatterns += wrongurlpatterns
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

appurlpatterns = [
    path('',include('user.urls')),
]
urlpatterns += appurlpatterns


