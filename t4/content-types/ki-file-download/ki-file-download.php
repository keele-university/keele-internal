<div class="container">
	<div class="row">
        <div class="col-12 mb-3">
            <div class="ki-download card">
                <div class="card-body">

                    <t4 type="content" output="selective-output" modifiers="" name="Title" format="<h3>$value</h3>" />
                    <t4 type="content" output="selective-output" modifiers="" name="Text description" format="<p class=&quot;card-text&quot;>$value</p>" />

                    <a href="<t4 type="content" output="file" name="File" type="button" modifiers="nav_sections" />" class="btn btn-primary" <t4 type="content" name="Link download action" output="normal" modifiers=""  />>
                        <t4 type="content" name="Button title" output="normal" modifiers=""  />
                        (<t4 type="meta" name="File" meta="filesize" /> KB)
                        <i class="fas fa-download ml-2"></i>
                    </a>
                </div> <!-- .card-body -->
            </div> <!-- .ki-download and card -->
        </div> <!-- .col-12 -->
	</div> <!-- .inner -->
</div> <!-- .module -->