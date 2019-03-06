<div class="container">
    <div class="row">
        <!-- start 9 / 3 -->
        <div class="col-md-9">
            <h2 class="mb-3"><t4 type="content" name="Event title" output="normal" modifiers=""  /></h2>
            <p class="font-weight-light">
                
                    Event date: <time class="date-label" datetime="<t4 type="content" output="normal" modifiers="nav_sections" name="Start date" date_format="yyyy-MM-dd HH:mm" />"><t4 type="content" output="normal" modifiers="nav_sections" name="Start date" date_format="dd MMMM yyyy" /></time> <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Optional end date" format=" - <t4 type=&quot;content&quot; output=&quot;normal&quot; modifiers=&quot;nav_sections&quot; name=&quot;Optional end date&quot; date_format=&quot;dd MMMM yyyy&quot; />" /> <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Event time" format=", $value" />
                
                </p>

            <figure class="figure mb-4 mx-md-0">
                    <img class="card-img-top" src="<t4 type="content" name="Lead image: 960px x 640px" output="file" modifiers="" />" alt="<t4 type="content" name="News title" output="normal" modifiers=""  />">
                    <figcaption class="figure-caption"><t4 type="content" name="Image caption" output="normal" modifiers=""  /></figcaption>
            </figure>

            <span class="ki-story-body">

                    <t4 type="content" output="selective-output" name="Event summary snippet" format="<p class=&quot;ki-story-snippet&quot;>
                        <strong>$value</strong>
                    </p>" />
                    
                    <span class="fulltext-main-story">
                    <t4 type="content" name="Main article body" output="normal" modifiers="medialibrary, nav_sections"  />
                    </span>
            </span>

            <div class="card mb-3">
                <div class="card-body">
                    
                    <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Event time" format="<p>Event time: $value</p>" />

                    <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Location" format="<p>Location: $value</p>" />
                    
                    <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Organiser name" format="<p>Organiser name: $value</p>" />

                    <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Contact email" format="<p>Contact email: <a href=&quot;mailto:$value&quot;>$value</a></p>" />

                    <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Contact phone" format="<p>Contact phone: $value</p>" />

                </div>
            </div>
        </div> <!-- .end col-md-9 -->

        <div class="col-md-3">
            <!-- navigation object : ki-home-9-3-ROOT --><t4 type="navigation" id="487"/>
        </div> <!-- end col-md-3 -->
        <!-- end 9 / 3 -->

    </div> <!-- .row -->
</div> <!-- .container -->