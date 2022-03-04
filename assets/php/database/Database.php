<?php

namespace assets\php\database;

class Database{

private $path;

public function __construct(string $path){
$this->path = $path;
if(!is_file($path)){
fopen($path, "a");
}
}

public function setItem(string $key, array $value){
$content = file_get_contents($this->path);
$json = json_decode($content, true);
if($json !== null){
$json[$key] = $value;
file_put_contents($this->path, json_encode($json));
}else{
$array = [$key => $value];
file_put_contents($this->path, json_encode($array));
}
}

public function getItem(string $key){
$content = file_get_contents($this->path);
$json = json_decode($content, true);
if(isset($json[$key])){
return $json[$key];
}else{
return false;
}
}

public function removeItem(string $key){
$content = file_get_contents($this->path);
$json = json_decode($content, true);
if(isset($json[$key])){
unset($json[$key]);
file_put_contents($this->path, json_encode($json));
}else{
return false;
}
}

public function getAll(){
$content = file_get_contents($this->path);
$json = json_decode($content, true);
if($json !== null){
return $json;
}else{
return false;
}
}
}
