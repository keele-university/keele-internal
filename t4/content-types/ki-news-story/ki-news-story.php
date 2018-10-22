<div class="container">
    <div class="row">
        <!-- start 9 / 3 -->
        <div class="col-md-9">
            <h2 class="mb-3"><t4 type="content" name="News title" output="normal" modifiers=""  /></h2>
            <p class="font-weight-light">
                <small>
                    <time class="date-label" datetime="<t4 type="content" output="normal" modifiers="nav_sections" name="Date released" date_format="yyyy-MM-dd HH:mm" />"><t4 type="content" output="normal" modifiers="nav_sections" name="Date released" date_format="dd MMMM yyyy" /></time>
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

                    <t4 type="content" name="Main story body" output="normal" modifiers="medialibrary, nav_sections"  />
                    
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
                                    <ul class="list-unstyled">
                                        <!-- (li>a>{list link $})*25 -->
                                        <li><a href="">list link 1</a></li>
                                        <li><a href="">list link 2</a></li>
                                        <li><a href="">list link 3</a></li>
                                    </ul>
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
                                    <ul class="list-unstyled">
                                        <li><a href="http://mail.keele.ac.uk">Email</a></li>
                                        <li><a href="https://maillists.keele.ac.uk">Mailing lists</a></li>
                                        <li><a href="https://servicedesk.keele.ac.uk">Service Desk</a></li>
                                        <li><a href="https://publications.keele.ac.uk">Symplectic</a></li>
                                    </ul>
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