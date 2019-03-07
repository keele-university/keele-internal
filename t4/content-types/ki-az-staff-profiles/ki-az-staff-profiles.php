<div class="container">
    <div class="row">
        <div class="js-ki-az-staff-wrapper col-12 mb-4 unique<t4 type="meta" meta="content_id" />" data-unique="<t4 type="meta" meta="content_id" />">
            <!-- <input type="text" id="kiAzInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"> -->

            <t4 type="content" output="selective-output" modifiers="medialibrary, nav_sections" name="Heading" format="<h3>$value</h3>" />
            <t4 type="content" output="selective-output" modifiers="medialibrary, nav_sections" name="Introductory text" format="<p>$value</p>" />   

            <div class="input-group mb-1">
                <input type="text" class="form-control" placeholder="Filter" aria-label="Filter" aria-describedby="kiAzInput">
                <!-- <div class="input-group-append">
                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div> -->
            </div>

		<!-- navigation object : ki- Staff profiles az auto list current branch --><t4 type="navigation" id="537"/>


        <!-- <t4 type="content" name="Bulleted list" output="normal" modifiers="medialibrary, nav_sections"  /> -->
        <!-- 
            <ul id="myUL" class="list-unstyled list-group">
                <li class="list-group-item"><a href="#">Apple</a></li>
                <li class="list-group-item"><a href="#">Bulletin</a></li>
            
                <li class="list-group-item"><a href="#">Crisp</a></li>
                <li class="list-group-item"><a href="#">Turkey</a></li>
                
                <li class="list-group-item"><a href="#">Umbrella</a></li>
                <li class="list-group-item"><a href="#">Zoid</a></li>
                <li class="list-group-item"><a href="#">Crisp at end should be re-ordered</a></li>
            </ul>
        -->
        </div> <!-- .cols-x -->
    </div> <!-- .row -->
</div><!-- .container -->