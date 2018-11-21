<t4 type="fix-url" element="URL link" />

                    
                        <!-- Entered twice selective in case of url or section link -->
                        <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Section link" format="<a href=&quot;<t4 type=&quot;content&quot; name=&quot;Section link&quot; output=&quot;linkurl&quot; />&quot; class=&quot;ki-home-hero-card card text-white bg-primary mb-5&quot;>" />
                        <t4 type="content" output="selective-output" name="URL link" format="<a href=&quot;$value&quot; class=&quot;ki-home-hero-card card text-white bg-primary mb-5&quot;>" />
    
                            
                                <img class="card-img-top" src="<t4 type="content" name="Image: 960px x (220)px)" output="file" modifiers="" />" alt="<t4 type="content" name="Card title" output="normal" modifiers=""  />">
                                <!-- <div class="card-header">Optional header</div> -->
                                <div class="card-body">
                                    <h5 class="card-title"><t4 type="content" name="Card title" output="normal" modifiers=""  /></h5>
                                    <t4 type="content" output="selective-output" process-format="true" name="Card text" format="<p class=&quot;card-text&quot;>$value</p>" />
                                </div>
                            
    
                        <t4 type="content" output="selective-output" modifiers="medialibrary, nav_sections" name="Section link" format="</a>" />
                        <t4 type="content" output="selective-output" modifiers="medialibrary, nav_sections" name="URL link" format="</a>" />