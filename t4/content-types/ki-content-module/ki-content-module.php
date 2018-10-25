<div class="container">
    <div class="row">
        <div class="col-12 mb-3">
            <!-- ki-content-module -->
            <div class="ki-content-module uniq<t4 type="meta" meta="content_id" />">

                <t4 type="content" output="selective-output" name="Title" format="<h2 class=&quot;mb-2&quot;>$value</h2>" />
                <!-- <h2 class="mb-2">Title</h2> -->

                <t4 type="content" output="selective-output" name="Subtitle" format="<p class=&quot;text-muted mb-3 h4&quot;>$value</p>" />
                <!-- <p class="text-muted mb-3 h4">Subtitle</p> -->

                <t4 type="content" output="selective-output" modifiers="medialibrary, nav_sections" name="Main body" format="$value" />
                <!-- output tinymce content -->

            </div>
            <!-- .ki-content-module -->
        </div> <!-- .col-12 -->
    </div> <!-- .row -->
</div> <!-- .container -->