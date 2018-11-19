<t4 type="fix-url" element="URL link" />

                    <a href="<t4 type="content" name="Section link" output="linkurl" modifiers=""  /><t4 type="content" name="URL link" output="normal" modifiers=""  />" class="card text-white bg-info mb-3">
                        
                        <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Image alt text" format="<img class=&quot;card-img-top&quot; src=&quot;<t4 type=&quot;content&quot; name=&quot;Image 960x640&quot; output=&quot;file&quot; modifiers=&quot;&quot; />&quot; alt=&quot;$value&quot;>" />
                        <div class="card-body">
                            <h5 class="card-title"><t4 type="content" name="Card title" output="normal" modifiers=""  /></h5>
                            <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Card text" format="<p class=&quot;card-text&quot;>$value</p>" />
                        </div>
                    </a>