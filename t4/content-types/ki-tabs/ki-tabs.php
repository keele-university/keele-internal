<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card mb-3">
                <div class="card-body">
                    <ul class="nav nav-pills mb-3 rounded p-2 border border-light" id="unique<t4 type="meta" meta="content_id" />" role="tablist">

                        <li class="nav-item">
                            <a class="nav-link active" id="tab-1-unique<t4 type="meta" meta="content_id" />" data-toggle="pill" href="#tabs-one-unique<t4 type="meta" meta="content_id" />" role="tab" aria-controls="tabs-one-unique<t4 type="meta" meta="content_id" />" aria-selected="true">
                            <t4 type="content" name="Tab title 1" output="normal" />
                            </a>
                        </li>

                        <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Tab title 2" format="<li class=&quot;nav-item&quot;>
                            <a class=&quot;nav-link&quot; id=&quot;tab-2-unique<t4 type=&quot;meta&quot; meta=&quot;content_id&quot; />&quot; data-toggle=&quot;pill&quot; href=&quot;#tabs-two-unique<t4 type=&quot;meta&quot; meta=&quot;content_id&quot; />&quot; role=&quot;tab&quot; aria-controls=&quot;tabs-two-unique<t4 type=&quot;meta&quot; meta=&quot;content_id&quot; />&quot; aria-selected=&quot;false&quot;>
                            $value
                            </a>
                        </li>" />
                        <!-- <li class="nav-item">
                            <a class="nav-link" id="tab-2-unique<t4 type="meta" meta="content_id" />" data-toggle="pill" href="#tabs-two-unique<t4 type="meta" meta="content_id" />" role="tab" aria-controls="tabs-two-unique<t4 type="meta" meta="content_id" />" aria-selected="false">
                            <t4 type="content" name="Tab title 2" output="normal" />
                            </a>
                        </li> -->


                        <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Tab title 3" format="<li class=&quot;nav-item&quot;>
                            <a class=&quot;nav-link&quot; id=&quot;tab-3-unique<t4 type=&quot;meta&quot; meta=&quot;content_id&quot; />&quot; data-toggle=&quot;pill&quot; href=&quot;#tabs-three-unique<t4 type=&quot;meta&quot; meta=&quot;content_id&quot; />&quot; role=&quot;tab&quot; aria-controls=&quot;tabs-three-unique<t4 type=&quot;meta&quot; meta=&quot;content_id&quot; />&quot; aria-selected=&quot;false&quot;>
                            $value
                            </a>
                        </li>" />
                        <!-- <li class="nav-item">
                            <a class="nav-link" id="tab-3-unique<t4 type="meta" meta="content_id" />" data-toggle="pill" href="#tabs-three-unique<t4 type="meta" meta="content_id" />" role="tab" aria-controls="tabs-three-unique<t4 type="meta" meta="content_id" />" aria-selected="false">
                            $value
                            </a>
                        </li> -->

                    </ul> <!-- end titles -->
                    <div class="tab-content" id="unique<t4 type="meta" meta="content_id" />Content">


                        <div class="tab-pane fade show active" id="tabs-one-unique<t4 type="meta" meta="content_id" />" role="tabpanel" aria-labelledby="tab-1-unique<t4 type="meta" meta="content_id" />">
                            <t4 type="content" name="Tab content 1" output="normal" modifiers="medialibrary, nav_sections"  />
                        </div>
                        
                        <!-- <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Tab title 2" format="" /> -->
                        <div class="tab-pane fade" id="tabs-two-unique<t4 type="meta" meta="content_id" />" role="tabpanel" aria-labelledby="tab-2-unique<t4 type="meta" meta="content_id" />">
                            <t4 type="content" name="Tab content 2" output="normal" modifiers="medialibrary, nav_sections"  />
                        </div>

                        <div class="tab-pane fade" id="tabs-three-unique<t4 type="meta" meta="content_id" />" role="tabpanel" aria-labelledby="tab-3-unique<t4 type="meta" meta="content_id" />">
                            <t4 type="content" name="Tab content 3" output="normal" modifiers="medialibrary, nav_sections"  />
                        </div>

                    </div> <!-- .tab-content -->
                </div> <!-- .card-body -->
            </div> <!-- .card -->
        </div>
    </div><!-- .row -->
</div><!-- .container -->