<?php
get_header();

include_once(get_template_directory() . '/em/classes/class.pageelements.php');

if(!isset($_GET['page'])){
	$_GET['page'] = 'index';
}

$folders = array('components', 'layouts', 'blocks');

?>

<section class="toolbox">
	<div class="toolbox__navbar">
		
		<div class="toolbox__navbar__nav-container">
			<div class="row">
				<div class="col-xs-4"><i class="fa fa-wrench toolbox__open"></i></div>
				<div class="col-xs-4 hidden"><i class="fa fa-code"></i></div>
				<div class="col-xs-4 hidden"><i class="fa fa-pencil"></i></div>
			</div>
		</div>

		<div class="toolbox__navbar__boxs-container">
			<div class="row">
				
				<div class="col-xs-12">
					<h2>Navigation</h2>
					<p><a href="?page=index">Home</a></p>
					<p><a href="?page=styleguide">Styleguide</a></p>
					<p><a href="?page=mixins">Mixins</a></p>
					<p><a href="?page=animations">Animations</a></p>
					<p><a href="?page=playground">Playground</a></p>
				</div>

				<?php foreach($folders as $folder): 
				$folders[$folder] = glob(get_template_directory().'/templates/toolbox/'.$folder.'/*.php'); 
				?>
					<div class="col-xs-12">
					<h2><?php echo $folder; ?></h2>

					<div class="toolbox__navbar__box">
					<?php foreach($folders[$folder] as $c):
						echo '<p><a href="/em/#'.basename($c).'">'.basename($c, '.php').'</a></p>';
					endforeach; ?>
					</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<?php

switch ($_GET['page']) {
	case 'animations':
		include(get_template_directory().'/templates/toolbox/animations.php');
		break;
	case 'playground':
		include(get_template_directory().'/templates/toolbox/playground.php');
		break;
	case 'styleguide':
		include(get_template_directory().'/templates/toolbox/styleguide.php');
		break;
	case 'mixins':
		include(get_template_directory().'/templates/toolbox/mixins.php');
		break;
	case 'viewer':
		include(get_template_directory().'/templates/toolbox/viewer.php');
		break;
	default:
		include(get_template_directory().'/templates/toolbox/index.php');
		break;
}

get_footer();