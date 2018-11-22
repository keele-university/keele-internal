<div class="container">
    <div class="row">
        <!-- start 9 / 3 -->
        <div class="col-md-9">
            <h2 class="mb-3"><t4 type="content" name="News title" output="normal" modifiers=""  /></h2>
            <p class="font-weight-light">
                <small>
                    <time class="date-label" datetime="<t4 type="content" output="normal" modifiers="nav_sections" name="Display date released" date_format="yyyy-MM-dd HH:mm" />"><t4 type="content" output="normal" modifiers="nav_sections" name="Display date released" date_format="dd MMMM yyyy" /></time>
                </small>
                </p>

            <figure class="figure mb-5 mx-md-3">
                    <img class="card-img-top" src="<t4 type="content" name="Lead image: 960px x 640px" output="file" modifiers="" />" alt="<t4 type="content" name="News title" output="normal" modifiers=""  />">
                    <figcaption class="figure-caption"><t4 type="content" name="Image caption" output="normal" modifiers=""  /></figcaption>
            </figure>

            <span class="ki-story-body">

                    <t4 type="content" output="selective-output" name="News summary snippet" format="<p class=&quot;ki-story-snippet&quot;>
                        <strong>$value</strong>
                    </p>" />
                <span class="fulltext-main-story">
                    <t4 type="content" name="Main story body" output="normal" modifiers="medialibrary, nav_sections"  />
                </span>
            </span>

        </div> <!-- .end col-md-9 -->

        <div class="col-md-3">

        <!-- start blockquote -->
        <t4 type="content" output="selective-output" name="Optional quote block" format="<blockquote class=&quot;blockquote bg-primary text-white rounded p-4&quot;>
                    <p class=&quot;mb-0&quot;>$value</p>" />
                
                    <!-- option quote block citation -->
                    <t4 type="content" output="selective-output" name="Quote block citation" format="<footer class=&quot;blockquote-footer text-light&quot;><cite title=&quot;Source Title&quot;>$value</cite></footer>" />

        <!-- closing blockquote -->                
        <t4 type="content" output="selective-output" name="Optional quote block" format="</blockquote>" />        

                <hr />

        <!-- navigation object : ki-home-9-3-ROOT --><t4 type="navigation" id="487"/>

        </div> <!-- end col-md-3 -->
        <!-- end 9 / 3 -->

    </div> <!-- .row -->
</div> <!-- .container -->