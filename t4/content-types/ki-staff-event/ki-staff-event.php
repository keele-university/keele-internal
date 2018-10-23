<p>Event title: <t4 type="content" name="Event title" output="normal" modifiers=""  /></p>

<p>Event summary snippet: <t4 type="content" name="Event summary snippet" output="normal" modifiers=""  /></p>
<p>Start date: <t4 type="content" output="normal" modifiers="nav_sections" name="Start date" date_format="dd MMMM yyyy" /></p>
<p>Optional end date: <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Optional end date" format="<t4 type=&quot;content&quot; output=&quot;normal&quot; modifiers=&quot;nav_sections&quot; name=&quot;Optional end date&quot; date_format=&quot;dd MMMM yyyy&quot; />" /></p>

<p>Date ordering: <t4 type="content" output="normal" modifiers="nav_sections" name="Date ordering" date_format="dd MMMM yyyy" /></p>
<p>Main article body: <t4 type="content" name="Main article body" output="normal" modifiers="medialibrary, nav_sections"  /></p>
<p>Location: <t4 type="content" name="Location" output="normal" modifiers=""  /></p>
<p>Organiser name: <t4 type="content" name="Organiser name" output="normal" modifiers=""  /></p>
<p>Contact email: <t4 type="content" name="Contact email" output="normal" modifiers=""  /></p>
<p>Contact phone: <t4 type="content" name="Contact phone" output="normal" modifiers=""  /></p>




<div class="container">
    <div class="row">
        <!-- start 9 / 3 -->
        <div class="col-md-9">
            <h2 class="mb-3"><t4 type="content" name="Event title" output="normal" modifiers=""  /></h2>
            <p class="font-weight-light">
                <small>
                    <time class="date-label" datetime="<t4 type="content" output="normal" modifiers="nav_sections" name="Start date" date_format="yyyy-MM-dd HH:mm" />"><t4 type="content" output="normal" modifiers="nav_sections" name="Start date" date_format="dd MMMM yyyy" /></time>
                </small>
                </p>

            <figure class="figure mb-5 mx-md-3">
                    <img class="card-img-top" src="<t4 type="content" name="Lead image: 960px x 640px" output="file" modifiers="" />" alt="<t4 type="content" name="News title" output="normal" modifiers=""  />">
                    <figcaption class="figure-caption"><t4 type="content" name="Image caption" output="normal" modifiers=""  /></figcaption>
            </figure>

            <span class="ki-story-body">

                    <t4 type="content" output="selective-output" name="Event summary snippet" format="<p class=&quot;ki-story-snippet&quot;>
                        <strong>$value</strong>
                    </p>" />

                    <t4 type="content" name="Main article body" output="normal" modifiers="medialibrary, nav_sections"  />
                    
            </span>

        </div> <!-- .end col-md-9 -->

        <div class="col-md-3">

                <div class="ki-utility-links accordion mb-3" id="accordionUtilityLinks">
                        <div class="card">
                            <div class="card-header p-0 text-left" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        Popular links
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionUtilityLinks">
                                <!-- collapse show to open on page load -->
                                <div class="card-body pb-1">
                                    <!-- navigation object : ki-home-9-3-popular-links --><t4 type="navigation" id="484"/>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header p-0 text-left" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Systems and portals
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionUtilityLinks">
                                <div class="card-body pb-1">
                                    <!-- navigation object : ki-home-9-3-systems-and-portals --><t4 type="navigation" id="485"/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="mb-3">
                        <button type="button" class="btn btn-primary btn-block mb-2 text-left">Central services</button>
                        <button type="button" class="btn btn-primary btn-block mb-2 text-left">A-Z</button>
                        <button type="button" class="btn btn-primary btn-block mb-2 text-left">Policies and guidelines</button>
                    </div>

                    <div class="card text-white bg-info mb-3">
                        <!-- <div class="card-header">Filler header optional</div> -->
                        <img class="card-img-top" src="https://picsum.photos/960/640?image=767" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Info filler title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-info mb-3">
                        <!-- <div class="card-header">Filler header</div> -->
                        <img class="card-img-top" src="https://picsum.photos/960/640?image=363" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Info card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header">Header and title on this one</div>
                        <img class="card-img-top" src="https://picsum.photos/960/640?image=242" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Here is the title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>

        </div> <!-- end col-md-3 -->
        <!-- end 9 / 3 -->

    </div> <!-- .row -->
</div> <!-- .container -->