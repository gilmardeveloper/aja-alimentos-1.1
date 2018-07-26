package com.example.ajaalimentoschange.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PageController {

	@GetMapping
	public String index() {
		return "nova_index";
	}
	
	@GetMapping("cadastro_cliente")
	public String cadastro() {
		return "nova_cadastro_cliente";
	}
	
	@GetMapping("fale_vendedor")
	public String faleVendedor() {
		return "nova_fale_vendedor";
	}
	
	@GetMapping("seja_fornecedor")
	public String fornecedor() {
		return "nova_seja_fornecedor";
	}
	
	@GetMapping("trabalhe")
	public String trabalhe() {
		return "nova_trabalhe";
	}
	
	@GetMapping("produto")
	public String produto() {
		return "original_produto";
	}
	
	@GetMapping("categorias")
	public String categorias() {
		return "nova_categorias";
	}
	
	@GetMapping("mapa")
	public String mapa() {
		return "nova_mapa";
	}
}
